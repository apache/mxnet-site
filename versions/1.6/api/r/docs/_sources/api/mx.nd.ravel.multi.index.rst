

``mx.nd.ravel.multi.index``
======================================================

Description
----------------------

Converts a batch of index arrays into an array of flat indices. The operator follows numpy conventions so a single multi index is given by a column of the input matrix. The leading dimension may be left unspecified by using -1 as placeholder.


**Example**::

	 
	 A = [[3,6,6],[4,5,1]]
	 ravel(A, shape=(7,6)) = [22,41,37]
	 ravel(A, shape=(-1,6)) = [22,41,37]
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Batch of multi-indices                                     |
+----------------------------------------+------------------------------------------------------------+
| ``shape``                              | Shape(tuple), optional, default=None.                      |
|                                        |                                                            |
|                                        | Shape of the array into which the multi-indices apply.     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/ravel.cc#L42

