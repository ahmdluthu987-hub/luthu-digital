import { ImageResponse } from "next/og";

// Route segment config


// Image metadata
export const size = {
    width: 48,
    height: 48,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                }}
            >
                {/* Logo SVG scaled for 48x48 */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 8L7 24H11L12.5 20.5H18.5L20 24H24L17.5 8H13.5ZM13.8 17L15.5 13L17.2 17H13.8Z" fill="#004D40" />
                    <path d="M19 14V21H25V24H16V14H19Z" fill="#FF6B35" />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
