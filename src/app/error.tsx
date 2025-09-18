"use client";
type ErrorProps = {
    message: string
}

const ErrorDisplay: React.FC<ErrorProps> = ({message}) => {
    return (
        <div className="text-center">Error: {message}</div>
    );
}

export default ErrorDisplay;