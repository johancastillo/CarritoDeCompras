const INITIAL_STATE={
    productos:[],
    ultimoId:0  
};

export default (state = INITIAL_STATE, action)=>{
    switch (action.type) {
		case 'AGREGAR_PRODUCTO':
			return {
				...state,
				productos:[ ...state.productos, action.payload],
				ultimoId: state.ultimoId+1
			};
		case 'ACTUALIZAR_PRODUCTO':
			return {
				...state,
			productos:action.payload
			};

		

		default: return state;
	};
}