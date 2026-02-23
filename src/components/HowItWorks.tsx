import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Code, CheckCircle } from 'lucide-react';

const steps = [
    {
        title: "1. 戦略立案",
        desc: "孫子が市場を分析し、最適な勝ち筋を導き出します。",
        icon: <LineChart size={24} />,
        color: "#007aff"
    },
    {
        title: "2. クリエイティブ",
        desc: "オグルヴィが顧客の心を動かすコピーを書き上げます。",
        icon: <MessageSquare size={24} />,
        color: "#ff3b30"
    },
    {
        title: "3. システム構築",
        desc: "マスクが圧倒的なスピードで美しいコードに変換します。",
        icon: <Code size={24} />,
        color: "#34c759"
    },
    {
        title: "4. 品質保証",
        desc: "豊田があらゆるバグを排除し、完璧な品質を保証します。",
        icon: <CheckCircle size={24} />,
        color: "#ff9500"
    }
];

// Need to import LineChart here since it's used in the array
import { LineChart } from 'lucide-react';

const HowItWorks: React.FC = () => {
    return (
        <section className="workflow-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center section-header"
                >
                    <h2 className="section-title">休まない。妥協しない。<br />すべてが自動で連動する。</h2>
                    <p className="section-subtitle">
                        案件ブリーフを入力するだけで、会社が動き出します。<br />
                        人間のコンサルタントが数週間かける仕事を、彼らは数時間〜数日で、<br />
                        しかも人間を超える精度で完遂します。
                    </p>
                </motion.div>

                <div className="workflow-container">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                className="workflow-step"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <div className="step-icon" style={{ color: step.color, borderColor: step.color }}>
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <motion.div
                                    className="step-connector"
                                    initial={{ opacity: 0, width: 0 }}
                                    whileInView={{ opacity: 1, width: "auto" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                                >
                                    <ArrowRight size={24} color="#a1a1a6" />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
