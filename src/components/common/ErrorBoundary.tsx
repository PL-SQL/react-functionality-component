import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, errorInfo: null };

  // 渲染备用 UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // 记录错误日志
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // 这里可以上报错误到 Sentry 等服务
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // 自定义错误提示 UI
      return (
        <div className="error-boundary">
          <h2>页面加载失败</h2>
          <p>请稍后重试或联系管理员</p>
          {this.state.errorInfo && (
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    // 正常渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;