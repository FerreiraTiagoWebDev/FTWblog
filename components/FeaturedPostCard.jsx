import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import NextLink  from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="group relative h-72 transform transition duration-200 hover:scale-110">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full ">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center transform transition duration-500 group-hover:scale-75">{post.title}</p>
      <div className="flex items-center absolute bottom-5 w-full justify-center ">
        <Image
          unoptimized
          alt={post.author.name}
          height="40px"
          width="85px"
          className="align-middle drop-shadow-lg rounded-full transform transition duration-500 hover:scale-110"
          src={post.author.photo.url}
        />
        
      </div>
    </div>
    <NextLink href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full " /></NextLink>
  </div>
);

export default FeaturedPostCard;