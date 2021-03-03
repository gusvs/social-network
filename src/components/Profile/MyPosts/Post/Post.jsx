import { React } from "react";
import s from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://i.pinimg.com/736x/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3--james-cameron-james-darcy.jpg"></img>
			{ props.message }
            <div>
                <span>Like</span>
            </div>
		</div>
	);
};

export default Post;
