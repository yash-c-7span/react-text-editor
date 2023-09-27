import { Route, Routes } from "react-router-dom";
import PostList from '../pages/post/List';
import QuillPostCreate from '../pages/post/Create';
import TipTapPostCreate from '../pages/post/TipTapCreate';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/quill/create" element={<QuillPostCreate />} />
            <Route path="/tip-tap/create" element={<TipTapPostCreate />} />
        </Routes>
    )
}