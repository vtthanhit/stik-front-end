import Header from '../components/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnlyLayout;
