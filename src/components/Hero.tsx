import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Cpu } from 'lucide-react';

interface HeroProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    const handleScrollToTeam = () => {
        const section = document.getElementById('team-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
            </div>

            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-content"
                >
                    <div className="logo-badge">
                        <Cpu size={20} className="logo-icon" />
                        <span>AutomationCompany</span>
                    </div>

                    <h1 className="hero-title">
                        あなたの会社に、<br />
                        <span className="text-gradient">スティーブ・ジョブズと孫子</span>を<br />
                        雇いませんか？
                    </h1>

                    <p className="hero-subtitle">
                        もう、使えないSaaSツールに毎月何十万も払うのはやめにしよう。<br />
                        高額な若手コンサルタントに、あなたのビジネスを実験させるのも終わりにしよう。<br />
                        AutomationCompanyは、歴史上の偉大な頭脳をインストールされた「自律型AIエージェント達」が、<br />
                        あなたの会社のマーケティングとシステム構築を<strong>完全に代行</strong>する、<br />
                        次世代のコンサルティング・ファームです。
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={handleScrollToTeam}>
                            圧倒的なチームの力を見る
                            <ArrowDown size={18} style={{ marginLeft: '8px' }} />
                        </button>
                        <button className="btn btn-secondary" onClick={onOpenModal}>
                            無料の戦略診断を受ける
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
