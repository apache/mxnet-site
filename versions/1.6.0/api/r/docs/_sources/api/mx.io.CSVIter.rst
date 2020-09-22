

``mx.io.CSVIter``
==================================

Description
----------------------

Returns the CSV file iterator.

In this function, the `data_shape` parameter is used to set the shape of each line of the input data.
If a row in an input file is `1,2,3,4,5,6`` and `data_shape` is (3,2), that row
will be reshaped, yielding the array [[1,2],[3,4],[5,6]] of shape (3,2).

By default, the `CSVIter` has `round_batch` parameter set to ``True``. So, if `batch_size`
is 3 and there are 4 total rows in CSV file, 2 more examples
are consumed at the first round. If `reset` function is called after first round,
the call is ignored and remaining examples are returned in the second round.

If one wants all the instances in the second round after calling `reset`, make sure
to set `round_batch` to False.

If ``data_csv = 'data/'`` is set, then all the files in this directory will be read.

``reset()`` is expected to be called only after a complete pass of data.

By default, the CSVIter parses all entries in the data file as float32 data type,
if `dtype` argument is set to be 'int32' or 'int64' then CSVIter will parse all entries in the file
as int32 or int64 data type accordingly.


**Example**::

	 
	 // Contents of CSV file ``data/data.csv``.
	 1,2,3
	 2,3,4
	 3,4,5
	 4,5,6
	 
	 // Creates a `CSVIter` with `batch_size`=2 and default `round_batch`=True.
	 CSVIter = mx.io.CSVIter(data_csv = 'data/data.csv', data_shape = (3,),
	 batch_size = 2)
	 
	 // Two batches read from the above iterator are as follows:
	 [[ 1.  2.  3.]
	 [ 2.  3.  4.]]
	 [[ 3.  4.  5.]
	 [ 4.  5.  6.]]
	 
	 // Creates a `CSVIter` with default `round_batch` set to True.
	 CSVIter = mx.io.CSVIter(data_csv = 'data/data.csv', data_shape = (3,),
	 batch_size = 3)
	 
	 // Two batches read from the above iterator in the first pass are as follows:
	 [[1.  2.  3.]
	 [2.  3.  4.]
	 [3.  4.  5.]]
	 
	 [[4.  5.  6.]
	 [1.  2.  3.]
	 [2.  3.  4.]]
	 
	 // Now, `reset` method is called.
	 CSVIter.reset()
	 
	 // Batch read from the above iterator in the second pass is as follows:
	 [[ 3.  4.  5.]
	 [ 4.  5.  6.]
	 [ 1.  2.  3.]]
	 
	 // Creates a `CSVIter` with `round_batch`=False.
	 CSVIter = mx.io.CSVIter(data_csv = 'data/data.csv', data_shape = (3,),
	 batch_size = 3, round_batch=False)
	 
	 // Contents of two batches read from the above iterator in both passes, after calling
	 // `reset` method before second pass, is as follows:
	 [[1.  2.  3.]
	 [2.  3.  4.]
	 [3.  4.  5.]]
	 
	 [[4.  5.  6.]
	 [2.  3.  4.]
	 [3.  4.  5.]]
	 
	 // Creates a 'CSVIter' with `dtype`='int32'
	 CSVIter = mx.io.CSVIter(data_csv = 'data/data.csv', data_shape = (3,),
	 batch_size = 3, round_batch=False, dtype='int32')
	 
	 // Contents of two batches read from the above iterator in both passes, after calling
	 // `reset` method before second pass, is as follows:
	 [[1  2  3]
	 [2  3  4]
	 [3  4  5]]
	 
	 [[4  5  6]
	 [2  3  4]
	 [3  4  5]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.io.CSVIter(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data.csv``                           | string, required.                                          |
|                                        |                                                            |
|                                        | The input CSV file or a directory path.                    |
+----------------------------------------+------------------------------------------------------------+
| ``data.shape``                         | Shape(tuple), required.                                    |
|                                        |                                                            |
|                                        | The shape of one example.                                  |
+----------------------------------------+------------------------------------------------------------+
| ``label.csv``                          | string, optional, default='NULL'.                          |
|                                        |                                                            |
|                                        | The input CSV file or a directory path. If NULL, all       |
|                                        | labels will be returned as                                 |
|                                        | 0.                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``label.shape``                        | Shape(tuple), optional, default=[1].                       |
|                                        |                                                            |
|                                        | The shape of one label.                                    |
+----------------------------------------+------------------------------------------------------------+
| ``batch.size``                         | int (non-negative), required.                              |
|                                        |                                                            |
|                                        | Batch size.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``round.batch``                        | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Whether to use round robin to handle overflow batch or     |
|                                        | not.                                                       |
+----------------------------------------+------------------------------------------------------------+
| ``prefetch.buffer``                    | long (non-negative), optional, default=4.                  |
|                                        |                                                            |
|                                        | Maximum number of batches to prefetch.                     |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | {'cpu', 'gpu'},optional, default='gpu'.                    |
|                                        |                                                            |
|                                        | Context data loader optimized for.                         |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {None, 'float16', 'float32', 'float64', 'int32', 'int64',  |
|                                        | 'int8', 'uint8'},optional,                                 |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | Output data type. ``None`` means no change.                |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``iter`` The result mx.dataiter


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/io/iter_csv.cc#L308

