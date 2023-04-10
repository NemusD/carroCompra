import { Component } from "react";
import Producto from './Producto';

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props

        return (
            
            <div style={styles.productos}>
                {productos.map(producto => 
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />    
                )}
            </div>
        )

    }
}

export default Productos