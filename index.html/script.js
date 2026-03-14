// iPhone界面模拟交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有可编辑元素
    initEditableElements();
    
    // 为图标添加点击事件
    initIconInteractions();
    
    // 为Dock栏图标添加点击事件
    initDockInteractions();
    
    // 添加一些视觉反馈效果
    addVisualEffects();
});

// 初始化可编辑元素
function initEditableElements() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    
    editableElements.forEach(element => {
        // 保存原始文本
        const originalText = element.textContent;
        
        // 点击时清空默认文本
        element.addEventListener('click', function() {
            if (this.textContent === originalText) {
                this.textContent = '';
            }
        });
        
        // 失去焦点时恢复默认文本（如果为空）
        element.addEventListener('blur', function() {
            if (this.textContent.trim() === '') {
                this.textContent = originalText;
            }
        });
        
        // 限制最大字符数
        element.addEventListener('input', function() {
            const maxLength = 100;
            if (this.textContent.length > maxLength) {
                this.textContent = this.textContent.substring(0, maxLength);
            }
        });
    });
}

// 初始化图标交互
function initIconInteractions() {
    const iconItems = document.querySelectorAll('.icon-item');
    
    iconItems.forEach(icon => {
        icon.addEventListener('click', function() {
            const iconName = this.querySelector('.icon-label').textContent;
            const iconClass = this.querySelector('i').className;
            
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // 显示提示信息
            showNotification(`打开${iconName}应用`);
            
            // 根据图标类型执行不同操作
            switch(iconName) {
                case '微信':
                    simulateWeChat();
                    break;
                case '备忘录':
                    simulateNotes();
                    break;
                case '知乎':
                    simulateZhihu();
                    break;
                case '文件夹':
                    simulateFolder();
                    break;
            }
        });
    });
}

// 初始化Dock栏交互
function initDockInteractions() {
    const dockItems = document.querySelectorAll('.dock-item');
    
    dockItems.forEach(item => {
        item.addEventListener('click', function() {
            const appName = this.querySelector('.dock-label').textContent;
            
            // 添加点击动画
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // 显示提示信息
            showNotification(`打开${appName}功能`);
            
            // 根据应用类型执行不同操作
            switch(appName) {
                case '电话':
                    simulatePhone();
                    break;
                case '设置':
                    simulateSettings();
                    break;
                case '美化':
                    simulateBeautify();
                    break;
                case '查手机':
                    simulateSearch();
                    break;
            }
        });
    });
}


// 显示通知
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    
    document.body.appendChild(notification);
    
    // 淡入
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // 2秒后淡出并移除
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// 模拟功能
function simulateWeChat() {
    console.log('模拟打开微信...');
    // 在实际应用中，这里可以跳转到微信或打开相关功能
}

function simulateNotes() {
    console.log('模拟打开备忘录...');
    // 可以在这里添加打开备忘录的逻辑
}

function simulateZhihu() {
    console.log('模拟打开知乎...');
    // 可以在这里添加打开知乎的逻辑
}

function simulateFolder() {
    console.log('模拟打开文件夹...');
    // 可以在这里添加打开文件夹的逻辑
}

function simulatePhone() {
    console.log('模拟打开电话...');
    // 可以在这里添加打开电话应用的逻辑
}

function simulateSettings() {
    console.log('模拟打开设置...');
    // 可以在这里添加打开设置的逻辑
}

function simulateBeautify() {
    console.log('模拟美化功能...');
    // 切换主题颜色
    const container = document.querySelector('.iphone-container');
    const currentBg = getComputedStyle(container).backgroundColor;
    
    if (currentBg === 'rgb(255, 255, 255)') {
        container.style.backgroundColor = '#f0f0f5';
        showNotification('已切换到浅色主题');
    } else {
        container.style.backgroundColor = '#ffffff';
        showNotification('已切换到默认主题');
    }
}

function simulateSearch() {
    console.log('模拟查手机功能...');
    // 显示搜索框或相关功能
    const searchText = prompt('请输入要搜索的内容:', '');
    if (searchText) {
        showNotification(`搜索: ${searchText}`);
    }
}

// 添加视觉反馈效果
function addVisualEffects() {
    // 为头像添加悬停效果
    const avatars = document.querySelectorAll('.avatar-circle');
    avatars.forEach(avatar => {
        avatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        avatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // 为卡片添加悬停效果
    const cards = document.querySelectorAll('.avatar-card, .image-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // 为聊天气泡添加悬停效果
    const chatBubbles = document.querySelectorAll('.chat-bubble');
    chatBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 添加键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // ESC键清除所有输入框焦点
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
    
    // Ctrl+Enter 在焦点输入框中添加换行
    if (e.ctrlKey && e.key === 'Enter') {
        if (document.activeElement.hasAttribute('contenteditable')) {
            document.execCommand('insertHTML', false, '<br>');
            e.preventDefault();
        }
    }
});
