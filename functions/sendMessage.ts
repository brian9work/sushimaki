import { CartList, Order } from "@/types/types";
import sucursales, { deliveryCost } from "@/utils/sucursales";

const sendMessage = (data: Order, cartList: CartList) => {
    const costDelivery = data.type === "delivery" ? deliveryCost : 0;

    // Resolver telefono de la sucursal elegida; fallback a la primera sucursal.
    const branchPhone = (sucursales.find(s => s.name === data.branch)?.number ?? sucursales[0].number).replace(/\D/g, '');

    const message = `*Hola me gustaria ordenar*%0A
${cartList.map(item => `- ${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`).join('%0A')}%0A
El *total* del pedido es: *$${(cartList.reduce((total, item) => total + (item.price * item.quantity), 0) + costDelivery).toFixed(2)}*`

    if (data.type === "delivery") {
        const messageDelivery = `${message} (incluyendo costo de envio de $${costDelivery})%0A
Tipo de Pedido: *Entrega a Domicilio*%0A
*Sucursal que prepara:* ${data.branch}%0A
*Dirección de Entrega:* ${data.address}%0A
*Referencias:* ${data.references}%0A
*Nombre del Cliente:* ${data.name}%0A
*Método de Pago:* ${data.paymentMethod === "cash" ? "Efectivo" : "Transferencia"}${data.paymentMethod === "cash" && data.cashAmount ? `%0A*Monto para Cambio:* $${data.cashAmount}` : ""}%0A
Gracias!`;

        const url = `https://wa.me/${branchPhone}?text=${messageDelivery}`;
        window.open(url, '_blank');
    }
    if (data.type === "pickup") {
        const messagePickup = `${message}%0A
Tipo de Pedido: *Recoger en restaurante*%0A%0A
*Sucursal:* ${data.branch}%0A
*A nombre de:* ${data.name}%0A
*Hora de llegada:* ${data.timeArrive}%0A
Gracias!`;

        const url = `https://wa.me/${branchPhone}?text=${messagePickup}`;
        window.open(url, '_blank');
    }

    console.log(data);
}

export default sendMessage;