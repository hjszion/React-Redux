//父子组件之间总是靠props传递参数
//子向父传递参数是靠给props传递参数从而引发父组件props改变

//案例 不同子组件之前怎么通过相同父组件而传递参数的:
//父组件
var Parent = React.createClass({
    getInitialState() {
        return {
            msg: "start"
        }
    },

    transferMsg(msg) {
        this.setState({ msg: msg })
    },
    render() {
        return <div>
            <Child_1 transferMsg={msg => this.transferMsg(msg)} />
            <Child_2 msg={this.state.msg} />
        </div>
    }
})

//子组件1
var Child_1 = React.createClass({
    componentDidMount() {
        setTimeout(() => {
            this.props.transferMsg('end')
        }, 1000);
    },

    render() {
        return <div>
            <p>child_1 component</p>
        </div>
    }
})

//子组件2
var Child_2 = React.createClass({
    render() {
        return <div>
            <p>child_2 component: {this.props.msg}</p>
        </div>
    }
})

//由于setState是异步的 
this.setState({ ...this.state, foo: 42 });
this.setState({ ...this.state, isBar: true });
//这样的情况下 第一次设置的foo值会被第二次的设置覆盖而还原

