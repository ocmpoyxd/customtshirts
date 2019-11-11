import React,{Component} from "react"
import Header from "../../components/header"


class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    { this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout