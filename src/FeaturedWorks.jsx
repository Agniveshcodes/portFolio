// src/components/FeaturedWorks.js
import React from 'react';

const FeaturedWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Featured works</h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-6">
            <img src="https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jwhOgNOVt9PgsABMlm5Vv8Y5e8J8KqAK7hK--KwMQq9SHuGT3iyhoNntNF7HytxeUquYK8n1fNfYnoC7AKhuJ6jwBqRm5rTXp8vb3X77ee40hPpVvxuj8dQrIFZnG0O5kBgETVPaLEvQ-UWLYaYvSgmrjM-YX16FIGc5dHdlpfuvRxDaEYh1z-TnmcQ-BgWhyBVEl2KqkI7XL7sCnIvV5OGW8IRu20lQTtLq4tsbtCXF--t0nJGIhQN7Jvq0wY7Nc75rndD5mKh7wmCmVdNZHdgXTPDKnGdsLodXrrnG9gSw1v1r3u3JLWA~HnUnWXFTAE0suTwg6VoEmyQJMdswpw__" alt="Designing Dashboards" className="w-32 h-32 rounded-lg object-cover"/>
            <div>
              <h3 className="text-xl font-semibold">Designing Dashboards</h3>
              <p className="text-sm text-blue-600 mb-2">2020 | Dashboard</p>
              <p className="text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <img src="https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZWxUK9y~QBr~HDYEUvsMkQGkflCh3ZZCjXQiLsWkZrdUv4Stv5l86n8yTH~sO~Y0ikmZBLKiS2eYkVbmEFgsZ7FzPtFeIlsJ9jqnBM554J-Wg-t7Yl2oou6DEv9a9Nl7PWgBEdMj8yoAkYxSL46uBgNUJ1lGsvwx79yGAbae5Kwm4GczmrLYvfEH0QmOfhbNac4H4E7zNAwV6imf2ZMQIW9lH9zXqAl-q~LsBNqqdgVozcm4thCVtH0stoeOmOjv3HBlI5rpRzzEmTDoJO5OBf2dwq~T7sb2xMWodB-nOwkg5o0Xdpf5~72UBDQSUsi5-iQ8tR-PeKgHFmN5tMzXrw__" alt="Vibrant Portraits of 2020" className="w-32 h-32 rounded-lg object-cover"/>
            <div>
              <h3 className="text-xl font-semibold">Vibrant Portraits of 2020</h3>
              <p className="text-sm text-blue-600 mb-2">2018 | Illustration</p>
              <p className="text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <img src="https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTPl0-l1bvfarTL1Rv7SRL6x9AJ8b2qlaf5PN656pY1s-YWX1o0yORJ23hOXE~SV4SLvYX84qv5P1iVG~fE19UiY3NeBsp3ByUPVNLXPyqeD0rS6rtI9NkKxOE4EoxJqGDMypnt4h5ac4gSqfUoyDAjgP-eHCZkw6pUYthu8n~qV4lDjx1J06PDPNkBnsFdwEQSlsMfgrNKw4jJ-GTwQe5mymokWdzvlDtfVAVlvZYuMiqC58bSeV-J5vfmaWwlZON1xH-6gwVHRSJtMXA1oRT0CzYpkR1t3eJ6JdiJGgdX9h6iWmpeMSj53Bph05Xa-qG7TGe7TVoWUVkFj6tqzWw__" alt="36 Days of Malayalam type" className="w-32 h-32 rounded-lg object-cover"/>
            <div>
              <h3 className="text-xl font-semibold">36 Days of Malayalam type</h3>
              <p className="text-sm text-blue-600 mb-2">2018 | Typography</p>
              <p className="text-gray-700">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
