IO
====================================================

Efficient distributed data loading and augmentation 
------------------------------------------------------


================================================  ===========================================================================
:doc:`mx.io.CSVIter <./mx.io.CSVIter>`            Returns the CSV file iterator
:doc:`mx.io.LibSVMIter <./mx.io.LibSVMIter>`      Returns the LibSVM iterator which returns data with `csr` storage type
:doc:`mx.io.MNISTIter <./mx.io.MNISTIter>`        Iterating on the MNIST dataset
:doc:`mx.io.arrayiter <./mx.io.arrayiter>`        Create MXDataIter compatible iterator from R's array
:doc:`mx.io.bucket.iter <./mx.io.bucket.iter>`    Create Bucket Iter
:doc:`mx.io.extract <./mx.io.extract>`            Extract a certain field from DataIter
:doc:`is.mx.dataiter <./is.mx.dataiter>`          Judge if an object is mx.dataiter
================================================  ===========================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.io.CSVIter
   mx.io.LibSVMIter
   mx.io.MNISTIter
   mx.io.arrayiter
   mx.io.bucket.iter
   mx.io.extract
   is.mx.dataiter

Loading image data 
---------------------


========================================================================  ===================================================================
:doc:`mx.io.ImageDetRecordIter <./mx.io.ImageDetRecordIter>`              Create iterator for image detection dataset packed in recordio
:doc:`mx.io.ImageRecordInt8Iter <./mx.io.ImageRecordInt8Iter>`            Iterating on image RecordIO files
:doc:`mx.io.ImageRecordIter <./mx.io.ImageRecordIter>`                    Iterates on image RecordIO files
:doc:`mx.io.ImageRecordIter_v1 <./mx.io.ImageRecordIter_v1>`              Iterating on image RecordIO files
:doc:`mx.io.ImageRecordUInt8Iter <./mx.io.ImageRecordUInt8Iter>`          Iterating on image RecordIO files
:doc:`mx.io.ImageRecordUInt8Iter_v1 <./mx.io.ImageRecordUInt8Iter_v1>`    Iterating on image RecordIO files
:doc:`im2rec <./im2rec>`                                                  Convert images into image recordio format
========================================================================  ===================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.io.ImageDetRecordIter
   mx.io.ImageRecordInt8Iter
   mx.io.ImageRecordIter
   mx.io.ImageRecordIter_v1
   mx.io.ImageRecordUInt8Iter
   mx.io.ImageRecordUInt8Iter_v1
   im2rec

