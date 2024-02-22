import { createContext } from 'react';
export const videoContextKey = createContext();

function ContextVideo({ children, value }) {
    return <videoContextKey.Provider value={value}>{children}</videoContextKey.Provider>;
}

export default ContextVideo;
