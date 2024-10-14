import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-secondary">
      <div className=" text-primary border-b">
        {/* upper side information */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-2 mb-6">
          {/* information 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* exclusive */}
            <div>
              <h1>Exclusive</h1>
              <div>Subscribe</div>
              <div>Get 10% off your first order</div>
              <div>
                <form action="submit">
                  <input
                    className="max-w-[150px]"
                    type="search"
                    placeholder="Enter your email"
                    required
                  />
                </form>
              </div>
            </div>
            {/* Support */}
            <div>
              <h1>Support</h1>
              <div>Kelapa Raya Rispa 4, North Sumatera.</div>
              <div>exclusive@gmail.com</div>
              <div>0821-6094-5033</div>
            </div>
          </div>

          {/* information 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* exclusive */}
            <div>
              <h1>Account</h1>
              <div>My Account</div>
              <div>Login / Register</div>
              <div>Cart</div>
              <div>Wishlist</div>
              <div>Shop</div>
            </div>
            {/* Support */}
            <div>
              <h1>Quick Link</h1>
              <div>Privacy Policy</div>
              <div>Term Of Use</div>
              <div>FAQ</div>
              <div>Contact</div>
            </div>
          </div>

          {/* information 3 */}
          <div className="flex flex-col justify-center">
            <h1>Download App</h1>
            <div>
              <p>Save $3 with App New User Only</p>
              <div>
                <div>Barcode</div>
                <div>
                  <div>download 1</div>
                  <div>download 2</div>
                </div>
              </div>
              <div>social media</div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom side information */}
      <div className="flex justify-center items-center py-4 text-primary/40 text-light text-sm tracking-[0.5px] ">
        &copy; Copyright Exclusive 2024. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
