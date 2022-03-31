import React from "react";
import { TabPane, Col, Row } from "reactstrap";

function TabPaneTwo(posts) {
  return (
    <TabPane tabId="pills2">
      <h4 className="title text-center">Blog</h4>
      <Col className="ml-auto mr-auto" md="10">
        <Row className="collections">
          {posts.map((post, index) => {
            return <Col md="12" key={"Post #" + index}>
              <img
                alt={"Thumb " + post.title}
                className="img-raised"
                src={post.thumbnail}
              ></img>
              <a className="link-blog" href={post.link}>{post.title}</a>
              <br />
              {post.categories.map((tag, index) => {
                return <React.Fragment key={"Tag #" + index}>
                  <i color="dark-gray"
                    className="now-ui-icons shopping_tag-content"> {tag}</i>&nbsp;
                </React.Fragment>
              })}
            </Col>
          })}
        </Row>
      </Col>
    </TabPane>
  );
}

export default TabPaneTwo;