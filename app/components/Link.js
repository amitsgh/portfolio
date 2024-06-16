import clsx from "clsx";
import NextLink from "next/link";

export default function Link(props) {
	const isInternal = props.toString().startsWith("/");
	const { underline, ...rest } = props;

	return (
		<NextLink
			{...rest}
			className={clsx(
				"underline-offset-4",
				(!isInternal || underline) && "underline",
				props.className
			)}
			target={isInternal ? undefined : "_blank"}
		>
			{props.children}
		</NextLink>
	);
}
