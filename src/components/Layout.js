import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#D3F044',
        color: 'D86B2A',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        width: '1200px'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                    Como va?
                </div>
                
            </div>
        )
    }
}

export default Layout