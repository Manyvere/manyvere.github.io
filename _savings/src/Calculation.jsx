import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUp, CaretDown, ArrowCounterClockwise, Check } from '@phosphor-icons/react';
import { DEFAULT_ASSUMPTIONS, money, number } from './model.js';

const copyAssumptions = value => ({ ...value, rates: [...value.rates] });
const unitPrice = value => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value);

function assumptionErrors(draft) {
  const fields = [
    ...draft.rates.map((value, index) => ({ key: `rate-${index}`, label: ['Associate hourly cost', 'Senior hourly cost', 'Manager hourly cost'][index], value, max: 1000 })),
    { key: 'fee', label: 'Price per walkthrough', value: draft.fee, max: 10000 },
    { key: 'platform', label: 'Annual platform fee', value: draft.platform, max: 1000000 },
    { key: 'realization', label: 'Share of model reduction', value: draft.realization, max: 100 },
  ];
  return Object.fromEntries(fields.flatMap(field => {
    if (field.value === '') return [[field.key, `Enter a value for ${field.label.toLowerCase()}.`]];
    if (!Number.isFinite(Number(field.value)) || Number(field.value) < 0 || Number(field.value) > field.max)
      return [[field.key, `${field.label} must be between 0 and ${number(field.max)}.`]];
    return [];
  }));
}

function Assumptions({ assumptions, reduction, onApply, onValidityChange }) {
  const [draft, setDraft] = useState(() => copyAssumptions(assumptions));
  const ownCommit = useRef(assumptions);
  useEffect(() => {
    if (assumptions !== ownCommit.current) {
      setDraft(copyAssumptions(assumptions));
      ownCommit.current = assumptions;
      onValidityChange(false);
    }
  }, [assumptions, onValidityChange]);
  const errors = assumptionErrors(draft);
  const error = Object.values(errors)[0];
  const updateDraft = nextDraft => {
    setDraft(nextDraft);
    const invalid = Object.keys(assumptionErrors(nextDraft)).length > 0;
    onValidityChange(invalid);
    if (invalid) return;
    const next = { rates: nextDraft.rates.map(Number), fee: Number(nextDraft.fee), platform: Number(nextDraft.platform), realization: Number(nextDraft.realization) };
    ownCommit.current = next;
    onApply(next);
  };
  const update = (key, value) => updateDraft({ ...draft, [key]: value });
  const validation = key => ({ 'aria-invalid': Boolean(errors[key]), 'aria-describedby': errors[key] ? 'assumptions-feedback' : undefined });
  return <aside className="assumptions-panel" aria-labelledby="assumptions-title">
    <h3 id="assumptions-title">Your assumptions.</h3>
    <div className="live-estimate-note"><Check size={14} /> Valid changes update your estimate instantly.</div>
    <form onSubmit={event => event.preventDefault()} noValidate>
      <fieldset>
        <legend>Internal hourly costs</legend>
        <p className="field-note">Salary, employer costs and overhead.</p>
        <div className="assumption-rates">{['Associate', 'Senior', 'Manager'].map((role, index) => <label key={role}>
          <span>{role}</span><div className="currency-field"><span>€</span><input aria-label={`${role} hourly cost`} type="number" min="0" max="1000" step="any" {...validation(`rate-${index}`)}
            value={Number.isFinite(draft.rates[index]) ? Number(draft.rates[index].toFixed(2)) : draft.rates[index]}
            onChange={event => update('rates', draft.rates.map((rate, i) => i === index ? event.target.value : rate))} /></div>
        </label>)}</div>
      </fieldset>
      <fieldset>
        <legend>Lineage fees</legend>
        <p className="field-note">Indicative pricing, excluding VAT.</p>
        <label className="assumption-row"><span>Per walkthrough</span><div className="currency-field"><span>€</span><input aria-label="Price per walkthrough" type="number" min="0" max="10000" step="any" value={draft.fee} {...validation('fee')} onChange={event => update('fee', event.target.value)} /></div></label>
        <label className="assumption-row"><span>Annual platform</span><div className="currency-field"><span>€</span><input aria-label="Annual platform fee" type="number" min="0" max="1000000" step="any" value={draft.platform} {...validation('platform')} onChange={event => update('platform', event.target.value)} /></div></label>
      </fieldset>
      <fieldset>
        <legend>Time assumptions</legend>
        <p className="field-note" id="reduction-help">100% uses the model’s expected reduction in full. 50% uses half of that reduction.</p>
        <label className="assumption-row"><span>Share of model reduction</span><div className="currency-field"><input aria-label="Share of model reduction" aria-describedby={errors.realization ? 'assumptions-feedback reduction-help' : 'reduction-help'} aria-invalid={Boolean(errors.realization)} type="number" min="0" max="100" step="1" value={draft.realization} onChange={event => update('realization', event.target.value)} /><span>%</span></div></label>
        <p className="assumption-reduction"><span>{error ? 'Last valid time reduction' : 'Resulting time reduction'}</span><strong>{reduction ? '≈' : ''}{number(reduction * 100)}%</strong></p>
      </fieldset>
      <div id="assumptions-feedback" role="status">{error && <p className="assumptions-feedback">{error} The estimate uses the last valid values.</p>}</div>
      <button className="text-button reset-assumptions" type="button" onClick={() => updateDraft(copyAssumptions(DEFAULT_ASSUMPTIONS))}><ArrowCounterClockwise size={15} /> Reset assumptions</button>
    </form>
  </aside>;
}

export function Calculation({ inputs, assumptions, result, setAssumptions, paused }) {
  const [invalidAssumptions, setInvalidAssumptions] = useState(false);
  return <section className="calculation-section calculation-refined" id="calculation" aria-labelledby="calculation-title">
    <div className="calculation-inner">
      <header className="calculation-heading">
        <span className="eyebrow">THE CALCULATION</span>
        <h2 id="calculation-title" tabIndex={-1}>How your estimate adds up.</h2>
        <p>From the work you do to the capacity you could free up.</p>
      </header>

      <section className="annual-workload" aria-labelledby="workload-title">
        <h3 className="calculation-chapter" id="workload-title"><span>01</span> Your annual workload</h3>
        <div className="workload-equation">
          <div><strong>{number(inputs.entities)}</strong><span>companies / year</span></div>
          <span className="equation-symbol" aria-label="multiplied by">×</span>
          <div><strong>{number(inputs.walkthroughs)}</strong><span>walkthroughs / client</span></div>
          <span className="equation-symbol" aria-label="equals">=</span>
          <div className="equation-total"><strong>{number(result.count)}</strong><span>walkthroughs / year</span></div>
        </div>
      </section>

      <div className="calculation-columns">
        <div className="calculation-explanation">
          <section className="time-derivation" aria-labelledby="time-title">
            <h3 className="calculation-chapter" id="time-title"><span>02</span> The time you get back</h3>
            <div className="time-equation"><strong>{result.hoursSaved > 0 && <span className="approximate">≈</span>}{number(result.hoursSaved)}<span> h</span></strong><span>freed up each year</span></div>
            <div className="annual-time-summary"><div><span>{number(result.hoursBefore)}</span><ArrowRight size={19} aria-label="to" /><span>{number(result.hoursAfter)}</span><small>team hours / year</small></div><span className="reduction-label">{result.reduction ? '≈' : ''}{number(result.reduction * 100)}% less team time</span></div>
            <div className="annual-time-bar" role="img" aria-label={`${number(result.hoursAfter, 1)} team hours remain, ${number(result.hoursSaved, 1)} hours freed up each year`}>
              <span className="time-retained" style={{ width: `${(1 - result.reduction) * 100}%` }} />
              <span className="time-recovered" style={{ width: `${result.reduction * 100}%` }} />
            </div>
            <div className="time-legend"><span><i />{number(result.hoursAfter)} h with Lineage</span><span><i />{number(result.hoursSaved)} h freed up</span></div>
            <details className="workflow-detail">
              <summary>Where those hours come from <CaretDown size={16} /></summary>
              <p>{number(result.count)} walkthroughs × approximately {number(result.hoursSavedPerWalkthrough, 2)} hours freed per walkthrough.</p>
              <p>The 13-step model starts at 8.75 team hours per walkthrough. We scale it to your {number(inputs.hours)} hours, then apply {number(assumptions.realization, 2)}% of its assumed reductions. Client-side time is excluded.</p>
              <table><caption>Team hours per walkthrough. Figures are rounded for display.</caption><thead><tr><th scope="col">Process step</th><th scope="col">Current</th><th scope="col">Lineage</th></tr></thead><tbody>{result.steps.map(step => <tr key={step.name}><th scope="row">{step.name}</th><td>{number(step.before, 2)}</td><td>{number(step.after, 2)}</td></tr>)}</tbody><tfoot><tr><th scope="row">Total</th><td>{number(inputs.hours, 2)}</td><td>{number(result.hoursAfterPerWalkthrough, 2)}</td></tr></tfoot></table>
            </details>
          </section>

          <section className="value-derivation" aria-labelledby="value-title">
            <h3 className="calculation-chapter" id="value-title"><span>03</span> The value after fees</h3>
            <details className="role-detail" open>
              <summary>Saved hours × cost per role <CaretDown size={16} /></summary>
              <ul className="role-breakdown">{result.roles.map(role => <li key={role.name}><span className="role-name">{role.name}</span><span className="role-equation">{number(role.hoursSaved, 1)} h × {unitPrice(role.rate)}</span><strong>{money(role.savedValue)}</strong></li>)}</ul>
              <p className="role-rounding-note">Annual hours and values, rounded for display. Totals use unrounded figures.</p>
            </details>
            {invalidAssumptions && <p className="estimate-pending" role="status">Last valid estimate. Complete the highlighted assumption to update it.</p>}
            <dl className="value-ledger">
              <div><dt>Value of freed staff time<small>Total of the three roles above</small></dt><dd>{money(result.grossValue)}</dd></div>
              <div><dt>Walkthrough fees<small>{number(result.count)} walkthroughs × {unitPrice(assumptions.fee)}</small></dt><dd>−{money(result.usageCost)}</dd></div>
              <div><dt>Annual platform fee</dt><dd>−{money(assumptions.platform)}</dd></div>
              <div className={`ledger-total ${result.netValue < 0 ? 'is-negative' : ''}`}><dt>Annual capacity value<small>After Lineage fees</small></dt><dd>{money(result.netValue)}</dd></div>
            </dl>
            <p className="break-even-note">{result.softwareCost === 0 ? 'No Lineage fees are included in this estimate.' : result.breakEvenWalkthroughs == null ? 'At these assumptions, the value of freed time per walkthrough does not cover its usage fee.' : <>At these assumptions, freed capacity covers the Lineage fees from <strong>{number(result.breakEvenWalkthroughs)} walkthroughs a year.</strong></>}</p>
          </section>
        </div>
        <Assumptions assumptions={assumptions} reduction={result.reduction} onApply={setAssumptions} onValidityChange={setInvalidAssumptions} />
      </div>

      <footer className="calculation-footer">
        <p>This is capacity you can put back to work. It becomes a cash saving only if spending actually falls. Time reductions are model assumptions, not guaranteed results. Implementation, training and client-side savings are excluded.</p>
        <div><span>Lineage Business Model 2026 · Savings worksheet<br />Calculations use unrounded values.</span><a href="#result-title" onClick={event => { event.preventDefault(); document.getElementById('result-title')?.focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: paused ? 'instant' : 'smooth' }); }}>Back to your estimate <ArrowUp size={16} /></a></div>
      </footer>
    </div>
  </section>;
}
