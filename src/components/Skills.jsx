import parse from 'react-html-parser';
export default function Skills({ post }) {
    return (
        <div id="skills-link" className="box-text">
        <h3>{parse(post.title.rendered)}</h3>
        <div className="pbox">
        <div className="small-p">{parse(post.content.rendered)}</div>
        </div>
        </div>
    )
}
