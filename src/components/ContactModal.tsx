import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <React.Fragment>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="modal-backdrop"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <div className="modal-container-wrapper">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="modal-content text-left"
                        >
                            <button
                                className="modal-close-btn"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>

                            <div className="modal-header">
                                <h3>無料戦略診断</h3>
                                <p>AI専門家チームが、あなたのビジネス課題に対する最適なアプローチをご提案します。</p>
                            </div>

                            <form className="contact-form" onSubmit={(e) => {
                                e.preventDefault();
                                // Simulation of form submission
                                alert("送信が完了しました。CIOイーロン・マスクによる受付処理を通して、CEOジョブズとCMO孫子へ引き継がれます。24時間以内にご連絡いたします。");
                                onClose();
                            }}>
                                <div className="form-group">
                                    <label htmlFor="company">会社名</label>
                                    <input type="text" id="company" placeholder="株式会社AutomationCompany" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">お名前</label>
                                    <input type="text" id="name" placeholder="山田 太郎" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">メールアドレス</label>
                                    <input type="email" id="email" placeholder="yamada@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">現在の課題・ご相談内容</label>
                                    <textarea id="message" rows={4} placeholder="DX推進に行き詰まっている、コンサル費用が高すぎる、など自由にお書きください。" required></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary submit-btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send size={18} style={{ marginRight: '8px' }} />
                                    診断を申し込む
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </React.Fragment>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
