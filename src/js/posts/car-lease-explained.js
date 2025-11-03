console.log('Car Lease calculator module loaded');

function getLeaseDetails() {
    function toNumber(value) {
        const n = parseFloat(value);
        return isNaN(n) ? 0 : n;
    }

    return {
        stickerPrice: toNumber(document.getElementById('sticker-price').value),
        dealerDiscount: toNumber(document.getElementById('dealer-discount').value),
        rolledInItems: toNumber(document.getElementById('rolled-in-items').value),
        capitalizedCostReduction: toNumber(document.getElementById('cap-cost-reduction').value),
        manufacturerIncentives: toNumber(document.getElementById('manufacturer-incentives').value),
        residualValuePercent: toNumber(document.getElementById('residual-value-percent').value),
        moneyFactor: toNumber(document.getElementById('money-factor').value),
        leaseTerm: parseInt(document.getElementById('lease-term').value, 10) || 0,
        nonRolledInItems: toNumber(document.getElementById('non-rolled-in-items').value),
        taxRate: toNumber(document.getElementById('tax-rate').value),
    };
}

function calculateLeasePayment(details) {
    const sellingPrice = details.stickerPrice - details.dealerDiscount;
    const grossCapCost = parseFloat(sellingPrice) + details.rolledInItems;
    const netCapCost = grossCapCost - details.capitalizedCostReduction - details.manufacturerIncentives;
    const residualValue = (details.residualValuePercent / 100) * details.stickerPrice;
    const apr = details.moneyFactor * 2400;
    const leaseTermSafe = details.leaseTerm > 0 ? details.leaseTerm : 1; // avoid divide by zero
    const monthlyDepreciation = (netCapCost - residualValue) / leaseTermSafe;
    const monthlyFinanceCharge = (netCapCost + residualValue) * details.moneyFactor;
    const totalMonthlyBeforeTax = monthlyDepreciation + monthlyFinanceCharge;
    const monthlyTax = totalMonthlyBeforeTax * (details.taxRate / 100);
    const monthlyPayment = totalMonthlyBeforeTax + monthlyTax;
    const totalDueAtSigning = monthlyPayment + details.nonRolledInItems;

    // Return a detailed breakdown so the caller can update the UI
    return {
        sellingPrice,
        grossCapCost,
        netCapCost,
        residualValue,
        apr,
        monthlyDepreciation,
        monthlyFinanceCharge,
        totalMonthlyBeforeTax,
        monthlyTax,
        monthlyPayment,
        totalDueAtSigning
    };
}

function formatCurrency(value) {
    return (typeof value === 'number' ? value : 0).toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

document.getElementById('calculate-lease-button').addEventListener('click', function() {
    const leaseDetails = getLeaseDetails();
    const result = calculateLeasePayment(leaseDetails);

    // Update output elements on the page
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText('out-msrp', formatCurrency(leaseDetails.stickerPrice));
    setText('out-selling-price', formatCurrency(result.sellingPrice));
    setText('out-gross-cap-cost', formatCurrency(result.grossCapCost));
    setText('out-cap-cost-reduction', formatCurrency(leaseDetails.capitalizedCostReduction + leaseDetails.manufacturerIncentives));
    setText('out-net-cap-cost', formatCurrency(result.netCapCost));
    setText('out-residual-value', formatCurrency(result.residualValue));
    setText('out-apr', (result.apr).toFixed(3) + '%');
    setText('out-monthly-depr', formatCurrency(result.monthlyDepreciation));
    setText('out-monthly-finance', formatCurrency(result.monthlyFinanceCharge));
    setText('out-monthly-tax', formatCurrency(result.monthlyTax));
    setText('out-monthly-payment', formatCurrency(result.monthlyPayment));
    setText('out-total-due', formatCurrency(result.totalDueAtSigning));
});

document.getElementById('clear-lease-button').addEventListener('click', function() {
    const inputIds = [
        'sticker-price','dealer-discount','rolled-in-items','cap-cost-reduction',
        'manufacturer-incentives','residual-value-percent','money-factor',
        'non-rolled-in-items','lease-term','tax-rate'
    ];
    inputIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    const outputIds = [
        'out-msrp','out-selling-price','out-gross-cap-cost','out-cap-cost-reduction',
        'out-net-cap-cost','out-residual-value','out-apr','out-monthly-depr','out-monthly-finance',
        'out-monthly-tax','out-monthly-payment','out-total-due'
    ];
    outputIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '--';
    });

    // optional: focus first input
    const first = document.getElementById('sticker-price');
    if (first) first.focus();
});
