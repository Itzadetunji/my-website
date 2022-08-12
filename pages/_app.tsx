import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
	// const { asPath } = useRouter();
	// const variants = {
	// 	out: {
	// 		opacity: 0,
	// 		y: 40,
	// 		transition: {
	// 			duration: 0.75,
	// 		},
	// 	},
	// 	in: {
	// 		opacity: 1,
	// 		y: 0,
	// 		transition: {
	// 			duration: 0.75,
	// 			delay: 0.5,
	// 		},
	// 	},
	// };
	return (
		<>
			{/* <div style={{ overflow: "hidden" }}>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						key={router.route}
						initial="pageInitial"
						animate="pageAnimate"
						exit="pageExit"
						variants={{
							pageInitial: {
								opacity: 0,
							},
							pageAnimate: {
								opacity: 1,
							},
							pageExit: {
								opacity: 0,
							},
						}}
					></motion.div>
				</AnimatePresence>
			</div> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
