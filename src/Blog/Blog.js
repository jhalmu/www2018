import React, { Component } from 'react';
import {Divider, Segment, Grid, List} from 'semantic-ui-react';
//Formatting WP-post to look right
import renderHTML from 'react-render-html';
//For WP-date 
import moment from 'moment';
//Locale here
import 'moment/locale/fi';

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
            let localdate = moment(modified).format('LLL');
            
            return (
                <div key={index}>
                {localdate}
                <h2>{title}</h2>
                {renderHTML(content)}   
                <h4>{writer}</h4>
                <br />
                </div>
            )
        })
        return (
            <div>
            <Segment aligned>
            <h1>Blog</h1>
            <Divider />
            <Grid divided stackable style={{ margin: '5em 2em 2em', padding: '2em 5em 0em 3em' }}>
                <Grid.Row>
                     <Grid.Column width={10}>
                        {blogposts}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <List link style={{ padding: '2em 2em 0em' }}>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Segment>
            </div>
        );
    }
}
export default Blog;