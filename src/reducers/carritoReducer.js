const INITIAL_STATE={
    productoseEnCarrito:[],
    ultimoId:0,
    total:0.0
};

export default (state = INITIAL_STATE, action)=>{
    switch (action.type) {
		case 'AGREGAR_AL_CARRITO':
			return {
				...state,
                productoseEnCarrito:[ ...state.productoseEnCarrito, action.payload],
                ultimoId: state.ultimoId+1,
                total: state.total + action.payload.subtotal
			};

		

		default: return state;
	};
}