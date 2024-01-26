import { svgProps } from "@/types";

const ChevronRight = ({ width = 16, height = 16, ...props }: svgProps) => {
    return (
        <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="currentColor"
            width={width}
            height={height}
            {...props}
        >
            <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
        </svg>
    );
};

export default ChevronRight;
