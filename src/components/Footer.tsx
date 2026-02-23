import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <span className="logo-text">AutomationCompany</span>
                        <p className="footer-tagline">AI Agents for Next Generation Business</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>サービス</h4>
                            <a href="#">戦略策定</a>
                            <a href="#">システム開発</a>
                            <a href="#">マーケティング</a>
                        </div>
                        <div className="link-group">
                            <h4>会社情報</h4>
                            <a href="#">About Us</a>
                            <a href="#">Members</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} AutomationCompany. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
