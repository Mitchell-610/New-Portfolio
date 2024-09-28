import BlogPic from '../../pics/Blog ss.png'


export default function Blog() {
    return (
      <div>
        <h1>Blog</h1>
        <div className="blog">
                <a href="https://mitchell-610.github.io/Blog">
                    <img src={BlogPic}
                        alt="A photo of my amazing blog site"/></a>        
            </div>
      </div>
    );
  }
  