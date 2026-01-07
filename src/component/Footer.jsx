export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Resources</li>
              <li>Free Resources</li>
              <li>Digital Tools Repository</li>
              <li>Digital Product Ideas</li>
              <li>Partner Program</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>Master Library</li>
              <li>Custom Book Service</li>
              <li>Custom Digital Product</li>
              <li>PLR Digital Products</li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>Sign In</li>
              <li>Forgot Password</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Terms & Conditions</li>
              <li>Privacy & Cookie Policy</li>
              <li>Cookie Settings</li>
              <li>Private Label Rights</li>
              <li>Partner Terms</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Socials</h4>
            <ul className="space-y-2">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Entrepedia. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
