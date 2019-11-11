import React from 'react'
import axios from 'axios'
import Tshirt from '../../components/Tshirt/Tshirt'
import Comment from '../../components/Comment/Comment'

export default class TShirtDetail extends React.Component {

    state = {
        tshirts: [],
        comments: []
    }
    

    componentDidMount() {
        axios.get(`http://localhost:4000/gettshirts/${this.props.match.params.tsId}`)
            .then(res => {
                const tshirts = res.data
                this.setState({ tshirts })
            })
        axios.get(`http://localhost:4000/getcomments/${this.props.match.params.tsId}`)
            .then(res => {
                const comments = res.data
                this.setState({ comments })
            })
    }
        
    render() {
        return (
            <div>
                <div className="container">
                    {this.state.tshirts.map(tshirt =>
                        <div key={tshirt.tsId} name="Tshirt">
                            <Tshirt
                                keyfordiv={tshirt.tsId}
                                imgsrc={tshirt.design}
                                name={tshirt.tsName}
                                creator={tshirt.uName}
                                gender={tshirt.gender}
                                topic={tshirt.topic}
                                rating={tshirt.rating}
                                countMarks={tshirt.countMarks}
                                discription={tshirt.discription}
                                ucanvas={tshirt.canvas}
                            />
                        </div>
                    )}
                    <div name="Comments">
                        {this.state.comments.map(comment =>
                            <div key={comment.commentId}>
                                <Comment
                                    id={comment.commentId}
                                    writer={comment.writerName}
                                    dateWriting={comment.dateWriting}
                                    text={comment.textComment}
                                    countLikes={comment.countLikes}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}