import "./testimonials.scss"

export default function Testimonials() {
    const data = [
       
        {
          id: 1,
          name: "Abhishek Bisht",
          title: "Co-Founder of DELKA",
          img:
            "assets/bisht.jpg",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit elit.  recusandae perspiciatis ducimus vel hic temporibus. ",
          
        },
        {
            id: 2,
            name: "Rannvijay Singh Rawat",
            title: "Senior Developer",
            img:
              "assets/man_2.png",
            icon: "assets/twitter.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
              featured: true,
          },
        {
          id: 3,
          name: "Skand Gupta",
          title: "CEO of ALBI",
          img:
            "assets/skand.png",
          icon: "assets/linkedin.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(

               
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                    <img src="assets/right-arrow.png" className="left" alt="" />
                    <img className="user" src={d.img} alt="" />
                    <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">{d.desc}
                     </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                 ))}
            </div>
            
        </div>
    )
}
