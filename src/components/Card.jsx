import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
	return (
		<>
			<motion.div
				drag
				dragConstraints={reference}
				whileDrag={{ scale: 1.1 }}
				dragElastic={0.1}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
				className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/30 py-10 px-5 overflow-hidden"
			>
				<FaRegFileLines />
				<p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
				<div className="footer absolute bottom-0 w-full left-0">
					<div className="flex justify-between items-center mb-3 py-1 px-8">
						<h5>{data.filesize}</h5>
						<span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
							{data.close === true ? <IoClose /> : <MdOutlineFileDownload />}
						</span>
					</div>
					{data.tag.isOpen === true && (
						<div
							className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}
						>
							<h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
						</div>
					)}
				</div>
			</motion.div>
		</>
	);
}

export default Card;
