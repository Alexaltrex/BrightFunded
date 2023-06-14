import * as React from "react";

export const tooltips = [
    <p>
        Trading Period refers to the <span>maximum number of calendar days</span> you have for each stage of the
        challenge - 30 days for the Challenge stage and 60 days for the Verification stage. If you hit the trading
        targets earlier than these allocated days, there's no need to wait out the remaining days. For example, if you
        meet all the Challenge's trading objectives in just 13 days, you won't have to wait another 17 days. We will
        promptly move you on to the Verification stage.
    </p>,
    <p>
        Minimum Trading Days refer to the <span>least number of days you are required to trade</span> during each phase
        of the evaluation process. For both the Challenge and Verification stages, you need to trade for at least 5
        days. A trading day is defined as a day where at least one transaction is carried out. If a transaction is held
        over multiple days, only the day on which the transaction was executed is considered as a trading day. These
        days do not have to be consecutive - it is up to you to decide on which days to trade within the defined trading
        period.
    </p>,
    <p>
        <p>
            Max. Daily Loss is a risk management rule that sets the <span>maximum loss you are allowed to incur in a single trading day</span>.
            For each phase, the limit is set at 5% of the initial balance. This includes losses from both closed and
            open positions (equity), and it is calculated based on the account balance from the start of the day.
        </p>
        <br/>
        <p>
            For example, if you are trading on an account with an initial balance of $100,000, the maximum daily loss
            allowed would be $5,000.
        </p>
    </p>,
    <p>
        <p>
            Max. Overall Loss is the <span>maximum allowable drawdown from your initial account balance</span>. The Max.
            Overall Loss is set at 10% of the initial balance in each phase, including open positions (equity).
        </p>
        <br/>
        <p>
            For example, if you are trading on an account with an initial balance of $100,000, the maximum overall loss
            allowed would be $10,000. This means that if your account equity falls below $90,000 the account will be
            terminated.
        </p>
    </p>,
    <p>
        <p>
            The Profit Target represents the <span>net profit a trader needs to reach</span>, solely from the sum of
            their
            closed positions, within their trading period. In the Challenge phase, this target is 8% of the initial
            balance,
            while in the Verification phase, it's reduced to 5% of the initial balance.
        </p>
        <br/>
        <p>
            This means that if your initial balance was $100,000, you would need to achieve a net profit of $8,000 in
            the
            Challenge phase, and $5,000 in the Verification phase, respectively.
        </p>
    </p>,
    <p>
        In the event that a trader has met all required objectives, with the exception of the Profit Target, during
        Phase 1 or Phase 2 and ends the period with an account balance that remains profitable with all positions
        closed, they are <span>eligible for a free repeat of the Challenge</span>. This provision allows traders who
        demonstrate effective risk management to have <span>indefinite tries at succeeding in the Challenge</span>, at
        no additional fee.
    </p>,
    <p>
        The Refundable Fee refers to the initial fee paid by traders to participate in the BrightFunded Challenge. Once
        the trader passes both the Challenge phase and the Verification phase, the trader becomes <span>eligible to reclaim the refundable fee</span>.
        This fee will be reimbursed back to the trader with the first Profit Split on their Funded Account.
    </p>,
    <p>
        If by the 28th day of the Challenge phase, your closed profit is more than 4% and you have not exceeded the loss
        limits, you are eligible for a <span>free extension of 14 calendar days</span>. This means you'll have an additional two
        weeks to reach your profit target without any additional cost.
    </p>
];
