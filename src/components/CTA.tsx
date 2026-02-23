import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
    onOpenModal: () => void;
}

const CTA: React.FC<CTAProps> = ({ onOpenModal }) => {
    return (
        <section className="cta-section">
            <div className="cta-background"></div>

            <div className="container position-relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="cta-card text-center"
                >
                    <h2 className="section-title">未来のコンサルティングを、<br />今日体験しよう。</h2>
                    <p className="cta-text">
                        あなたのビジネスに、歴史的な知性を組み込む準備はできましたか？<br />
                        まずはYUTO会長、またはCEOジョブズに、あなたの抱える課題をお聞かせください。<br />
                        我々のAIエージェントが、24時間以内に「戦わずして勝つ」戦略をご提案します。
                    </p>

                    <motion.button
                        className="btn btn-primary btn-large cta-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onOpenModal}
                    >
                        無料戦略診断を申し込む
                        <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
