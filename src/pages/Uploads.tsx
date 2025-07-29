import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, Upload, Image, FileText, Music, Video, Download, Eye, Trash2, Play } from "lucide-react";
import { toast } from "sonner";

export default function Uploads() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    const newFile = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    };
    setUploadedFiles(prev => [...prev, newFile]);
    toast.success(`${file.name} uploaded successfully!`);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (type.startsWith('video/')) return <Video className="w-4 h-4" />;
    if (type.startsWith('audio/')) return <Music className="w-4 h-4" />;
    return <FileText className="w-4 h-4" />;
  };

  const uploadExamples = [
    {
      title: "Basic File Upload",
      description: "Simple file input with validation",
      component: (
        <div className="space-y-3">
          <Label htmlFor="basic-upload">Choose file to upload</Label>
          <Input
            id="basic-upload"
            type="file"
            onChange={handleFileInput}
            accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
          />
          <p className="text-sm text-muted-foreground">
            Supports images, videos, audio, and documents
          </p>
        </div>
      ),
      code: `<div className="space-y-3">
  <Label htmlFor="file-upload">Choose file to upload</Label>
  <Input
    id="file-upload"
    type="file"
    onChange={handleFileInput}
    accept="image/*,video/*,audio/*,.pdf,.doc,.docx"
  />
</div>`
    },
    {
      title: "Drag & Drop Zone",
      description: "Interactive drop zone with visual feedback",
      component: (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive ? 'border-primary bg-primary/5' : 'border-border'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {dragActive ? 'Drop files here' : 'Upload your files'}
          </h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop files here, or click to browse
          </p>
          <Button variant="outline">
            Choose Files
          </Button>
        </div>
      ),
      code: `const [dragActive, setDragActive] = useState(false);

const handleDrag = (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.type === "dragenter" || e.type === "dragover") {
    setDragActive(true);
  } else if (e.type === "dragleave") {
    setDragActive(false);
  }
};

const handleDrop = (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  setDragActive(false);
  // Handle file upload logic
};

<div
  className={\`border-2 border-dashed rounded-lg p-8 text-center transition-colors \${
    dragActive ? 'border-primary bg-primary/5' : 'border-border'
  }\`}
  onDragEnter={handleDrag}
  onDragLeave={handleDrag}
  onDragOver={handleDrag}
  onDrop={handleDrop}
>
  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
  <h3 className="text-lg font-semibold mb-2">Upload your files</h3>
  <Button variant="outline">Choose Files</Button>
</div>`
    },
    {
      title: "Image Upload with Preview",
      description: "Image-specific upload with instant preview",
      component: (
        <div className="space-y-4">
          <Label>Upload Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
          />
          {uploadedFiles.filter(f => f.type.startsWith('image/')).slice(-1).map(file => (
            <div key={file.id} className="space-y-3">
              <img
                src={file.preview}
                alt={file.name}
                className="w-full max-w-xs h-48 object-cover rounded-lg border"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{file.name}</span>
                <span className="text-muted-foreground">{formatFileSize(file.size)}</span>
              </div>
            </div>
          ))}
        </div>
      ),
      code: `const [uploadedFiles, setUploadedFiles] = useState([]);

const handleFileUpload = (file: File) => {
  const newFile = {
    id: Date.now(),
    name: file.name,
    size: file.size,
    type: file.type,
    preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
  };
  setUploadedFiles(prev => [...prev, newFile]);
};

<div className="space-y-4">
  <Input type="file" accept="image/*" onChange={handleFileUpload} />
  {uploadedFiles.map(file => (
    <img src={file.preview} alt={file.name} className="w-full max-w-xs h-48 object-cover rounded-lg" />
  ))}
</div>`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">File Uploads</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive file upload components with drag & drop, previews, and support for 
          images, videos, audio, and documents. Includes real upload logic and validation.
        </p>
      </div>

      {/* Styled Upload Layouts */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Creative Upload Layouts
          </CardTitle>
          <CardDescription>
            Flexible and visually appealing upload component designs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Multi-Zone Upload Grid */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Multi-Zone Upload Grid</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-6 text-center transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Image className="w-8 h-8 text-primary mx-auto mb-3" />
                  <Label className="block font-medium text-foreground mb-1">Images</Label>
                  <p className="text-xs text-muted-foreground mb-3">JPG, PNG, GIF</p>
                  <Button size="sm" variant="outline" className="relative z-10">
                    <Upload className="w-3 h-3 mr-2" />
                    Choose
                  </Button>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Video className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <Label className="block font-medium text-foreground mb-1">Videos</Label>
                  <p className="text-xs text-muted-foreground mb-3">MP4, AVI, MOV</p>
                  <Button size="sm" variant="outline" className="relative z-10 border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white">
                    <Upload className="w-3 h-3 mr-2" />
                    Choose
                  </Button>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-center transition-all duration-300 hover:border-green-500 hover:shadow-lg hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Music className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <Label className="block font-medium text-foreground mb-1">Audio</Label>
                  <p className="text-xs text-muted-foreground mb-3">MP3, WAV, OGG</p>
                  <Button size="sm" variant="outline" className="relative z-10 border-green-300 text-green-600 hover:bg-green-600 hover:text-white">
                    <Upload className="w-3 h-3 mr-2" />
                    Choose
                  </Button>
                </div>
                
                <div className="group relative overflow-hidden rounded-xl border-2 border-dashed border-purple-300 bg-gradient-to-br from-purple-50 to-violet-50 p-6 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <FileText className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <Label className="block font-medium text-foreground mb-1">Documents</Label>
                  <p className="text-xs text-muted-foreground mb-3">PDF, DOC, TXT</p>
                  <Button size="sm" variant="outline" className="relative z-10 border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white">
                    <Upload className="w-3 h-3 mr-2" />
                    Choose
                  </Button>
                </div>
              </div>
            </div>

            {/* Horizontal Upload Bar */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Horizontal Upload Bar</h4>
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-background via-muted/30 to-background rounded-xl border-2 border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Label className="text-lg font-semibold">Quick Upload</Label>
                    <p className="text-sm text-muted-foreground">Drag files here or click to browse</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                    Max 50MB
                  </Badge>
                  <Input 
                    type="file" 
                    multiple 
                    className="hidden" 
                    id="quick-upload"
                    onChange={handleFileInput}
                  />
                  <label htmlFor="quick-upload">
                    <Button variant="gradient" className="cursor-pointer">
                      Select Files
                    </Button>
                  </label>
                </div>
              </div>
            </div>

            {/* Compact Upload Cards */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Compact Upload Cards</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-background to-muted/40 rounded-lg border border-border hover:shadow-md transition-all duration-200 min-w-[280px]">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center flex-shrink-0">
                    <Image className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Label className="block font-medium text-foreground">Profile Picture</Label>
                    <p className="text-xs text-muted-foreground">JPG, PNG up to 5MB</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Browse
                  </Button>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-background to-muted/40 rounded-lg border border-border hover:shadow-md transition-all duration-200 min-w-[280px]">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Label className="block font-medium text-foreground">Resume/CV</Label>
                    <p className="text-xs text-muted-foreground">PDF, DOC up to 10MB</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Browse
                  </Button>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-background to-muted/40 rounded-lg border border-border hover:shadow-md transition-all duration-200 min-w-[280px]">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Label className="block font-medium text-foreground">Demo Video</Label>
                    <p className="text-xs text-muted-foreground">MP4, MOV up to 100MB</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Browse
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Examples */}
      {uploadExamples.map((example, index) => (
        <Card key={index} className="card-elegant">
          <CardHeader>
            <CardTitle>{example.title}</CardTitle>
            <CardDescription>{example.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                {example.component}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Code</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleCopyCode(example.code)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
                <div className="code-block text-xs">
                  <pre>{example.code}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* File Type Specific Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="w-5 h-5" />
            Media Upload Examples
          </CardTitle>
          <CardDescription>
            Specialized upload components for different file types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image Upload */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Image Upload</h4>
              <div className="border border-dashed border-border rounded-lg p-6 text-center">
                <Image className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">JPG, PNG, GIF up to 10MB</p>
                <Button size="sm" variant="outline">Select Image</Button>
              </div>
            </div>

            {/* Video Upload */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Video Upload</h4>
              <div className="border border-dashed border-border rounded-lg p-6 text-center">
                <Video className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">MP4, AVI, MOV up to 100MB</p>
                <Button size="sm" variant="outline">Select Video</Button>
              </div>
            </div>

            {/* Audio Upload */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Audio Upload</h4>
              <div className="border border-dashed border-border rounded-lg p-6 text-center">
                <Music className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">MP3, WAV, OGG up to 25MB</p>
                <Button size="sm" variant="outline">Select Audio</Button>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Document Upload</h4>
              <div className="border border-dashed border-border rounded-lg p-6 text-center">
                <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">PDF, DOC, DOCX up to 50MB</p>
                <Button size="sm" variant="outline">Select Document</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <Card className="card-elegant">
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
            <CardDescription>
              Preview and manage your uploaded files
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <div className="flex-shrink-0">
                    {file.preview ? (
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                        {getFileIcon(file.type)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.preview && (
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                    )}
                    {file.type.startsWith('audio/') && (
                      <Button size="sm" variant="ghost">
                        <Play className="w-4 h-4" />
                      </Button>
                    )}
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => {
                        setUploadedFiles(prev => prev.filter(f => f.id !== file.id));
                        toast.success("File removed");
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* API Integration Example */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>API Integration Example</CardTitle>
          <CardDescription>
            Example upload logic with progress tracking and error handling
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="code-block">
            <pre>{`// Upload function with progress tracking
const uploadFile = async (file: File, onProgress?: (progress: number) => void) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};

// Usage with progress tracking
const handleUpload = async (file: File) => {
  setUploading(true);
  setProgress(0);
  
  try {
    const result = await uploadFile(file, (progress) => {
      setProgress(progress);
    });
    
    toast.success('File uploaded successfully!');
    onUploadComplete(result);
  } catch (error) {
    toast.error('Upload failed. Please try again.');
  } finally {
    setUploading(false);
  }
};`}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}