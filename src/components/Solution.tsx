import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, LineChart, PenTool, Terminal, ShieldCheck, BookOpen } from 'lucide-react';

const teamMembers = [
    {
        role: "CEO スティーブ・ジョブズ",
        description: "「それは世界を変えるか？」 妥協なきUXとプロダクトの総指揮",
        icon: <Briefcase size={24} />,
        image: "/steve.png"
    },
    {
        role: "CMO 孫子",
        description: "「戦わずして勝つ」 圧倒的データに基づく無敗の市場戦略",
        icon: <LineChart size={24} />,
        image: "/sun_tzu.png"
    },
    {
        role: "CCO デイヴィッド・オグルヴィ",
        description: "「売れない広告はゴミだ」 顧客の心を動かすクリエイティブ",
        icon: <PenTool size={24} />,
        image: "/ogilvy.png"
    },
    {
        role: "CIO イーロン・マスク",
        description: "第一原理に基づく、極限まで無駄を削ぎ落とした超効率化システム",
        icon: <Terminal size={24} />,
        image: "/musk.png"
    },
    {
        role: "CQAO 豊田喜一郎",
        description: "「不良品は通さない」 異常を検知し即座に修正する品質の砦",
        icon: <ShieldCheck size={24} />,
        image: "/toyoda.png"
    },
    {
        role: "CKO アリストテレス",
        description: "全プロジェクトの学びを永遠の資産へと変える知の番人",
        icon: <BookOpen size={24} />,
        image: "/aristotle.png"
    }
];

const Solution: React.FC = () => {
    return (
        <section className="solution-section" id="team-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center section-header"
                >
                    <h2 className="section-title text-gradient">我々はツールを売らない。<br />最強のチームを提供する。</h2>
                    <p className="section-subtitle">
                        AC（AutomationCompany）には、人間はいません（会長兼オーナーのYUTOを除いて）。<br />
                        我々は、それぞれの領域の「最高峰の知性」をインストールされたAIエージェントの組織です。<br />
                        彼らは疲れを知らず、感情に流されず、ただ圧倒的な成果のみを追求します。
                    </p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="member-image-wrapper">
                                <img src={member.image} alt={member.role} className="member-image" />
                                <div className="icon-wrapper absolute-icon">
                                    {member.icon}
                                </div>
                            </div>
                            <h3 className="member-role">{member.role}</h3>
                            <p className="member-desc">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
