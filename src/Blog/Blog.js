import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import renderHTML from 'react-render-html';

class Blog extends Component {
   constructor(props) {
       super(props);
       this.state = {
           blogposts: []
}
   }

   componentDidMount() {
       let dataURL = 'https://public-api.wordpress.com/rest/v1.1/sites/10534066/posts?fields=date,modified,title,content,slug,status,author&pretty=true';
       fetch(dataURL)
       .then(response => response.json())
       .then(response => {
           this.setState({
              blogposts: response.posts,
              
           })
       
        })
    }
    render() {
        let blogposts = this.state.blogposts.map((blogposts,index) => {
            let content = blogposts.content;
            let title = blogposts.title;
            let modified = blogposts.modified;
            let writer = blogposts.author.nice_name;
            
            return (
                <div key={index}>
                {modified}
                <h2>{title}</h2>
                {renderHTML(content)}   
                <h4>{writer}</h4>
                <br />
                </div>
            )
        })
        return (
            <div>
            <Container>
            <h1>Blog</h1>
            {blogposts}
            </Container>
            </div>
        );
    }
}
export default Blog;