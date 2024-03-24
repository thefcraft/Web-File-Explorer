icon_mapping = {
    'ai': 'adobe-illustrator.png',
    'apk': 'apk.png',
    'css': 'css.png',
    'disc': 'disc.png',
    'doc': 'word.png',
    'docx': 'word.png',
    'eot': 'font-file.png',  # Change this to 'ttf.png' or 'otf.png' if desired
    'excel': 'excel.png',
    'flac': 'music.png',  # Assuming this is a music file extension
    'gif': 'image.png',  # Assuming this is an image file extension
    'html': 'text.png',  # Assuming this is a text file extension
    'image': 'image.png',
    'iso': 'iso.png',
    'java': 'js-file.png',  # Change this to 'javascript.png' if desired
    'javascript': 'js-file.png',  # Change this to 'javascript.png' if desired
    'jpeg': 'image.png',  # Assuming this is an image file extension
    'jpg': 'image.png',  # Assuming this is an image file extension
    'js': 'js-file.png',  # Change this to 'javascript.png' if desired
    'jsx': 'js-file.png',  # Change this to 'javascript.png' if desired
    'mail': 'mail.png',
    'mkv': 'video.png',  # Assuming this is a video file extension
    'mp3': 'music.png',
    'mp4': 'video.png',  # Assuming this is a video file extension
    'mpeg': 'video.png',  # Assuming this is a video file extension
    'mpg': 'video.png',  # Assuming this is a video file extension
    'music': 'music.png',
    'ogg': 'music.png',  # Assuming this is a music file extension
    'pdf': 'pdf.png',
    'php': 'php.png',
    'png': 'image.png',  # Assuming this is an image file extension
    'powerpoint': 'powerpoint.png',
    'ppt': 'powerpoint.png',
    'psd': 'psd.png',
    'record': 'record.png',
    'sql': 'sql.png',
    'svg': 'svg.png',
    'text': 'text.png',
    'ttf': 'ttf.png',  # Change this to 'font-file.png' or 'otf.png' if desired
    'txt': 'text.png',
    'vector': 'vector.png',
    'vob': 'video.png',  # Assuming this is a video file extension
    'wav': 'music.png',  # Assuming this is a music file extension
    'webm': 'video.png',  # Assuming this is a video file extension
    'webp': 'image.png',  # Assuming this is an image file extension
    'word': 'word.png',
    'xls': 'excel.png',
    'xlsx': 'excel.png',
    'xml': 'text.png',  # Assuming this is a text file extension
    'zip': 'zip.png',
}

import os

for k, v in icon_mapping.items():
    name = os.path.join('root\\files', v.split('.')[0]+"."+k)    
    with open(name, 'w') as f: pass