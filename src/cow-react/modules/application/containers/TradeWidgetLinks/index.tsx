import { Trans } from '@lingui/macro'
import { Routes } from '@cow/constants/routes'

import { RowFixed } from 'components/Row'
import { useMemo } from 'react'
import { useTradeState } from '@cow/modules/trade/hooks/useTradeState'
import { parameterizeTradeRoute } from '@cow/modules/trade/utils/parameterizeTradeRoute'
import * as styledEl from './styled'

export function TradeWidgetLinks() {
  const tradeState = useTradeState()

  const tradeContext = useMemo(
    () => ({
      inputCurrencyId: tradeState?.state.inputCurrencyId || undefined,
      outputCurrencyId: tradeState?.state.outputCurrencyId || undefined,
      chainId: tradeState?.state.chainId?.toString(),
    }),
    [tradeState?.state]
  )

  return (
    <RowFixed>
      <styledEl.MenuItem>
        <styledEl.Link activeClassName="active" to={parameterizeTradeRoute(tradeContext, Routes.SWAP)}>
          <Trans>Swap</Trans>
        </styledEl.Link>
      </styledEl.MenuItem>

      <styledEl.MenuItem>
        <styledEl.Link activeClassName="active" to={parameterizeTradeRoute(tradeContext, Routes.LIMIT_ORDER)}>
          <Trans>Limit</Trans>
        </styledEl.Link>
        <styledEl.Badge>
          <Trans>Beta</Trans>
        </styledEl.Badge>
      </styledEl.MenuItem>
    </RowFixed>
  )
}
