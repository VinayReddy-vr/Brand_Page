const Content = () =>{
    return(
        <main className="content">
            <div className="main_content">
               <h1>
               YOUR FEET DESERVE THE BEST
               </h1>
               <p>
               YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
               </p>

               <div className="main_btn">
                <button>
                    Shop Now
                </button>
                <button className="Sec-btn">
                    Category
                </button>
                </div>

               <div className="shopping_sites">
               <p>
               Also Available On
               </p>
               
               <div className="Shopping_Icons">
               <img src="/Images/flipkart.png" alt="flipkart_Image"/> 
               <img src="/Images/amazon.png" alt="amazon_Image"/>    
               </div>

               </div>
               
               
               
            </div>

            <div className="main_image">
                <img src="/Images/shoe_image.png" alt="Shoe_Image"/>
            </div>

            
        </main>
    );
};

export default Content;