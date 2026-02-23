import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
    return (
        <section className="problem-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="problem-content text-center"
                >
                    <h2 className="section-title">AI時代のジレンマ。</h2>
                    <div className="problem-text">
                        <p>世の中にはAIツールが溢れています。<br />しかし、現実はどうでしょう？</p>

                        <div className="quotes-container">
                            <motion.div
                                className="quote-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                「ChatGPTを契約したが、誰も使いこなせない」
                            </motion.div>
                            <motion.div
                                className="quote-card"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                「DXコンサルに依頼したが、月額数百万かかり、<br />出てきたのは分厚いPowerPointだけ」
                            </motion.div>
                        </div>

                        <p className="conclusion">ツールは、操作する優秀な人間がいなければただの箱です。</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
