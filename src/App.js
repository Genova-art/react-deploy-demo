import React from 'react';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Tugas Deployment React.js</h1>

        <div style={styles.memberSection}>
          <div style={styles.memberBox}>
            <p style={styles.label}>Nama Mahasiswa 1</p>
            <h2 style={styles.name}>Bondan Pratama Firdaus</h2>
          </div>

        <div style={styles.statusBadge}>
          <p style={styles.statusText}>Penerapan Deployment & CI/CD</p>
          <h3 style={styles.successText}>CI/CD BERHASIL 🚀</h3>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f6f9',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    margin: 0,
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    padding: '40px',
    maxWidth: '550px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    color: '#1a202c',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '30px',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '15px',
  },
  memberSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '35px',
  },
  memberBox: {
    backgroundColor: '#f8fafc',
    borderLeft: '4px solid #3b82f6',
    padding: '12px 20px',
    borderRadius: '0 8px 8px 0',
    textAlign: 'left',
  },
  label: {
    margin: 0,
    fontSize: '12px',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  name: {
    margin: '4px 0 0 0',
    fontSize: '18px',
    color: '#334155',
    fontWeight: '600',
  },
  statusBadge: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '12px',
    padding: '20px',
  },
  statusText: {
    margin: '0 0 8px 0',
    color: '#166534',
    fontSize: '15px',
    fontWeight: '500',
  },
  successText: {
    margin: 0,
    color: '#15803d',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
};

export default App;
