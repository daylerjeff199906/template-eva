/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { useDropzone } from 'react-dropzone';

export function FileDropzone () {

    const {
        acceptedFiles,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
            'file/csv': ['.csv', '.xls', '.xlsx']
        },
        maxFiles: 1
    });

    return (
        <section className="container">
            <div {...getRootProps({ className: 'flex flex-col items-center justify-center w-full h-96 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500' })}>
                <input {...getInputProps()} />
                {
                    acceptedFiles.length > 0 ? (
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img
                                alt="preview"
                                src='/next.svg'
                                className="block w-full h-full"
                                onLoad={() => {
                                    URL.revokeObjectURL((acceptedFiles as any).preview);
                                }}
                            />
                            {
                                acceptedFiles.map((file: any) => (
                                    <div key={file.path} className="flex flex-col items-center justify-center gap-2">
                                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                            {file.path}
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {file.size} bytes
                                        </span>
                                        <Button>
                                            Previsualizar datos
                                        </Button>
                                    </div>
                                ))
                            }
                        </div>
                    ) : <div className="flex flex-col justify-center items-center text-sm dark:text-gray-400">
                        <img
                            src="/cloud-upload.svg"
                            alt="upload"
                            className="w-20 h-20 mb-4 dark:text-gray-400"
                        />
                        <span className="font-semibold text-lg pb-1">
                            Cargar un archivo o arrastrar y soltar
                        </span>

                        <em
                            className="text-xs text-gray-500 dark:text-gray-400"
                        >*.csv, *.xls, *.xlsx, *.txt</em>
                    </div>
                }

            </div>
        </section>
    );
}