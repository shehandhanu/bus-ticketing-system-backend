const Counts = require('../models/Count.Model')

//Add Route
exports.getTotalEarning = async (req, res) => {

    const finalCount = await Counts.find()
    const countx = finalCount[0]

    let finalAmount = 0;

    for (let i = 0; i <= 12; i++) {
        switch (i) {
            case 1:
                {
                    let price = countx.monthEarning.January.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 2:
                {
                    let price = countx.monthEarning.February.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 3:
                {
                    let price = countx.monthEarning.March.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 4:
                {
                    let price = countx.monthEarning.April.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 5:
                {
                    let price = countx.monthEarning.May.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 6:
                {
                    let price = countx.monthEarning.June.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 7:
                {
                    let price = countx.monthEarning.July.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 8:
                {
                    let price = countx.monthEarning.August.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 9:
                {
                    let price = countx.monthEarning.September.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 10:
                {
                    let price = countx.monthEarning.October.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 11:
                {
                    let price = countx.monthEarning.November.Earning
                    finalAmount = finalAmount + price
                    break;
                }
            case 12:
                {
                    let price = countx.monthEarning.December.Earning
                    finalAmount = finalAmount + price
                    break;
                }
        }

    }

    if (!finalCount) {
        res.status(201).json({
            success: false
        })
    }

    res.status(200).json({
        success: true,
        finalCount,
        finalAmount: finalAmount
    })
}
