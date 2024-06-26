import React from 'react'

import { OrderDetails } from '../../../components/orders/OrderDetails'
import { useOrderAndErc20s } from '../../../hooks/useOperatorOrder'
import { useOrderTrades } from '../../../hooks/useOperatorTrades'
import { useSanitizeOrderIdAndUpdateUrl } from '../../../hooks/useSanitizeOrderIdAndUpdateUrl'
import { RedirectToNetwork, useNetworkId } from '../../../state/network'
import { ORDER_QUERY_INTERVAL } from '../../const'

export const OrderWidget: React.FC = () => {
  const networkId = useNetworkId()
  const orderId = useSanitizeOrderIdAndUpdateUrl()

  const {
    order,
    isLoading: isOrderLoading,
    errors,
    errorOrderPresentInNetworkId,
  } = useOrderAndErc20s(orderId, ORDER_QUERY_INTERVAL)
  const { trades, error, isLoading: areTradesLoading } = useOrderTrades(order)

  if (error) {
    errors['trades'] = error
  }

  if (errorOrderPresentInNetworkId && networkId !== errorOrderPresentInNetworkId) {
    return <RedirectToNetwork networkId={errorOrderPresentInNetworkId} />
  }

  return (
    <OrderDetails
      order={order}
      trades={trades}
      isOrderLoading={isOrderLoading}
      areTradesLoading={areTradesLoading}
      errors={errors}
    />
  )
}
