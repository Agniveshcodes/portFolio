// src/components/Hero.js
import React from "react";

const Avatar = () => {
  return (
    <section className="text-start py-20">
      <div className=" lg:flex gap-20">
        <div className=" mt-10 flex items-center justify-center w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IXvnRdZwTeHOjoL-5osCcSQw-c0Y8q9Q6XtO25SAt1rrTzl4yzdBs81cf0my3JxF4XJlKIKEXKeY7VJHp4s9xsMIE6NtH1tPebUQIUFFabzRcUx5wHsc3U6OGJ6tCfNSSqQcfOE4dz3wZLL9yt~C8QNL~2InG0~r12uppYomqdVWomSxLrHNBPMDqmuzQ85b3~So5BmOZDZ6IsNu-hNhO01ntb-YHtiWl4~jn64fMv8lN62iORaQwKq383KEJ~HW-K59rs7J-6GyZSXUAiTrX4TUkSAiFRu3pDgFKBN3EXnltU9GLxAMpTh0K906giTkXhf~yM0TBeRwQ7nCyLs23g__"
            alt=""
            className="h-60 w-60 ml-40 rounded-full"
          />
        </div>
        <div className="ml-20 lg:flex flex-wrap w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md ">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Avatar;
