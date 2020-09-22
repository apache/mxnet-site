NDArray 
====================================================

The core MXNet data structure for all mathematical operations
------------------------------------------------------------------



Get array attributes
--------------------


================================================  ==========================================================
:doc:`dim.MXNDArray <./dim.MXNDArray>`            Dimension operator overload of mx.ndarray
:doc:`is.mx.ndarray <./is.mx.ndarray>`            Check if src.array is mx.ndarray
:doc:`length.MXNDArray <./length.MXNDArray>`      Length operator overload of mx.ndarray
:doc:`mx.nd.shape.array <./mx.nd.shape.array>`    Returns a 1D int64 array containing the shape of data
:doc:`mx.nd.size.array <./mx.nd.size.array>`      Returns a 1D int64 array containing the size of data
:doc:`print.MXNDArray <./print.MXNDArray>`        print operator overload of mx.ndarray
================================================  ==========================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   dim.MXNDArray
   is.mx.ndarray
   length.MXNDArray
   mx.nd.shape.array
   mx.nd.size.array
   print.MXNDArray

Create arrays
------------------


==============================================  ===========================================================================================
:doc:`mx.nd.array <./mx.nd.array>`              Create a new ``mx.ndarray`` that copies the content from src on ctx
:doc:`mx.nd.one.hot <./mx.nd.one.hot>`          Returns a one-hot array
:doc:`mx.nd.ones <./mx.nd.ones>`                Generate an mx.ndarray object with ones
:doc:`mx.nd.ones.like <./mx.nd.ones.like>`      Return an array of ones with the same shape and type as the input array
:doc:`mx.nd.zeros <./mx.nd.zeros>`              Generate an mx.nd.array object with zeros
:doc:`mx.nd.zeros.like <./mx.nd.zeros.like>`    Return an array of zeros with the same shape, type and storage type as the input array
==============================================  ===========================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.array
   mx.nd.one.hot
   mx.nd.ones
   mx.nd.ones.like
   mx.nd.zeros
   mx.nd.zeros.like

Manipulation of arrays
------------------------



Conversion
^^^^^^^^^^^^


====================================================  ====================================================================
:doc:`Ops.MXNDArray <./Ops.MXNDArray>`                Binary operator overloading of mx.ndarray
:doc:`as.array.MXNDArray <./as.array.MXNDArray>`      as.array operator overload of mx.ndarray
:doc:`as.matrix.MXNDArray <./as.matrix.MXNDArray>`    as.matrix operator overload of mx.ndarray
:doc:`mx.nd.Cast <./mx.nd.Cast>`                      Casts all elements of the input to a new type
:doc:`mx.nd.amp.cast <./mx.nd.amp.cast>`              Cast function between low precision float/FP32 used by AMP
:doc:`mx.nd.cast.storage <./mx.nd.cast.storage>`      Casts tensor storage type to the new type
:doc:`mx.nd.copyto <./mx.nd.copyto>`                  Generate an mx.ndarray object on ctx, with data copied from src
:doc:`mx.nd.load <./mx.nd.load>`                      Load an mx.nd.array object on disk
:doc:`mx.nd.save <./mx.nd.save>`                      Save an mx.nd.array object
====================================================  ====================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   Ops.MXNDArray
   as.array.MXNDArray
   as.matrix.MXNDArray
   mx.nd.Cast
   mx.nd.amp.cast
   mx.nd.cast.storage
   mx.nd.copyto
   mx.nd.load
   mx.nd.save

Reshaping
^^^^^^^^^^^^^


==================================================  ======================================================================================================
:doc:`mx.nd.Concat <./mx.nd.Concat>`                Joins input arrays along a given axis
:doc:`mx.nd.Reshape <./mx.nd.Reshape>`              Reshapes the input array
:doc:`mx.nd.flatten <./mx.nd.flatten>`              Flattens the input array into a 2-D array by collapsing the higher dimensions
:doc:`mx.nd.reshape.like <./mx.nd.reshape.like>`    Reshape some or all dimensions of `lhs` to have the same shape as some or all dimensions of `rhs`
:doc:`mx.nd.scatter.nd <./mx.nd.scatter.nd>`        Scatters data into a new tensor according to indices
:doc:`mx.nd.split <./mx.nd.split>`                  Splits an array along a particular axis into multiple sub-arrays
:doc:`mx.nd.squeeze <./mx.nd.squeeze>`              Remove single-dimensional entries from the shape of an array
:doc:`mx.nd.stack <./mx.nd.stack>`                  Join a sequence of arrays along a new axis
==================================================  ======================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.Concat
   mx.nd.Reshape
   mx.nd.flatten
   mx.nd.reshape.like
   mx.nd.scatter.nd
   mx.nd.split
   mx.nd.squeeze
   mx.nd.stack

Expanding elements
^^^^^^^^^^^^^^^^^^^^^


========================================================================  ========================================================================================================================================================================================
:doc:`mx.nd.GridGenerator <./mx.nd.GridGenerator>`                        Generates 2D sampling grid for bilinear sampling
:doc:`mx.nd.UpSampling <./mx.nd.UpSampling>`                              Upsamples the given input data
:doc:`mx.nd.broadcast.add <./mx.nd.broadcast.add>`                        Returns element-wise sum of the input arrays with broadcasting
:doc:`mx.nd.broadcast.axes <./mx.nd.broadcast.axes>`                      Broadcasts the input array over particular axes
:doc:`mx.nd.broadcast.axis <./mx.nd.broadcast.axis>`                      Broadcasts the input array over particular axes
:doc:`mx.nd.broadcast.div <./mx.nd.broadcast.div>`                        Returns element-wise division of the input arrays with broadcasting
:doc:`mx.nd.broadcast.equal <./mx.nd.broadcast.equal>`                    Returns the result of element-wise **equal to** (==) comparison operation with broadcasting
:doc:`mx.nd.broadcast.greater <./mx.nd.broadcast.greater>`                Returns the result of element-wise **greater than** (>) comparison operation with broadcasting
:doc:`mx.nd.broadcast.greater.equal <./mx.nd.broadcast.greater.equal>`    Returns the result of element-wise **greater than or equal to** (>=) comparison operation with broadcasting
:doc:`mx.nd.broadcast.hypot <./mx.nd.broadcast.hypot>`                    Returns the hypotenuse of a right angled triangle, given its "legs" with broadcasting
:doc:`mx.nd.broadcast.lesser <./mx.nd.broadcast.lesser>`                  Returns the result of element-wise **lesser than** (<) comparison operation with broadcasting
:doc:`mx.nd.broadcast.lesser.equal <./mx.nd.broadcast.lesser.equal>`      Returns the result of element-wise **lesser than or equal to** (<=) comparison operation with broadcasting
:doc:`mx.nd.broadcast.like <./mx.nd.broadcast.like>`                      Broadcasts lhs to have the same shape as rhs
:doc:`mx.nd.broadcast.logical.and <./mx.nd.broadcast.logical.and>`        Returns the result of element-wise **logical and** with broadcasting
:doc:`mx.nd.broadcast.logical.or <./mx.nd.broadcast.logical.or>`          Returns the result of element-wise **logical or** with broadcasting
:doc:`mx.nd.broadcast.logical.xor <./mx.nd.broadcast.logical.xor>`        Returns the result of element-wise **logical xor** with broadcasting
:doc:`mx.nd.broadcast.maximum <./mx.nd.broadcast.maximum>`                Returns element-wise maximum of the input arrays with broadcasting
:doc:`mx.nd.broadcast.minimum <./mx.nd.broadcast.minimum>`                Returns element-wise minimum of the input arrays with broadcasting
:doc:`mx.nd.broadcast.minus <./mx.nd.broadcast.minus>`                    Returns element-wise difference of the input arrays with broadcasting
:doc:`mx.nd.broadcast.mod <./mx.nd.broadcast.mod>`                        Returns element-wise modulo of the input arrays with broadcasting
:doc:`mx.nd.broadcast.mul <./mx.nd.broadcast.mul>`                        Returns element-wise product of the input arrays with broadcasting
:doc:`mx.nd.broadcast.not.equal <./mx.nd.broadcast.not.equal>`            Returns the result of element-wise **not equal to** (!=) comparison operation with broadcasting
:doc:`mx.nd.broadcast.plus <./mx.nd.broadcast.plus>`                      Returns element-wise sum of the input arrays with broadcasting
:doc:`mx.nd.broadcast.power <./mx.nd.broadcast.power>`                    Returns result of first array elements raised to powers from second array, element-wise with broadcasting
:doc:`mx.nd.broadcast.sub <./mx.nd.broadcast.sub>`                        Returns element-wise difference of the input arrays with broadcasting
:doc:`mx.nd.broadcast.to <./mx.nd.broadcast.to>`                          Broadcasts the input array to a new shape
:doc:`mx.nd.expand.dims <./mx.nd.expand.dims>`                            Inserts a new axis of size 1 into the array shape For example, given ``x`` with shape ``(2,3,4)``, then ``expand_dims(x, axis=1)`` will return a new array with shape ``(2,1,3,4)``
:doc:`mx.nd.pad <./mx.nd.pad>`                                            Pads an input array with a constant or edge values of the array
:doc:`mx.nd.repeat <./mx.nd.repeat>`                                      Repeats elements of an array
:doc:`mx.nd.tile <./mx.nd.tile>`                                          Repeats the whole array multiple times
========================================================================  ========================================================================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.GridGenerator
   mx.nd.UpSampling
   mx.nd.broadcast.add
   mx.nd.broadcast.axes
   mx.nd.broadcast.axis
   mx.nd.broadcast.div
   mx.nd.broadcast.equal
   mx.nd.broadcast.greater
   mx.nd.broadcast.greater.equal
   mx.nd.broadcast.hypot
   mx.nd.broadcast.lesser
   mx.nd.broadcast.lesser.equal
   mx.nd.broadcast.like
   mx.nd.broadcast.logical.and
   mx.nd.broadcast.logical.or
   mx.nd.broadcast.logical.xor
   mx.nd.broadcast.maximum
   mx.nd.broadcast.minimum
   mx.nd.broadcast.minus
   mx.nd.broadcast.mod
   mx.nd.broadcast.mul
   mx.nd.broadcast.not.equal
   mx.nd.broadcast.plus
   mx.nd.broadcast.power
   mx.nd.broadcast.sub
   mx.nd.broadcast.to
   mx.nd.expand.dims
   mx.nd.pad
   mx.nd.repeat
   mx.nd.tile

Rearranging elements
^^^^^^^^^^^^^^^^^^^^^^


========================================================  =================================================================================
:doc:`mx.nd.SequenceReverse <./mx.nd.SequenceReverse>`    Reverses the elements of each sequence
:doc:`mx.nd.SwapAxis <./mx.nd.SwapAxis>`                  Interchanges two axes of an array
:doc:`mx.nd.depth.to.space <./mx.nd.depth.to.space>`      Rearranges(permutes) data from depth into blocks of spatial data
:doc:`mx.nd.flip <./mx.nd.flip>`                          Reverses the order of elements along given axis while preserving array shape
:doc:`mx.nd.reverse <./mx.nd.reverse>`                    Reverses the order of elements along given axis while preserving array shape
:doc:`mx.nd.shuffle <./mx.nd.shuffle>`                    Randomly shuffle the elements
:doc:`mx.nd.space.to.depth <./mx.nd.space.to.depth>`      Rearranges(permutes) blocks of spatial data into depth
:doc:`mx.nd.swapaxes <./mx.nd.swapaxes>`                  Interchanges two axes of an array
:doc:`mx.nd.transpose <./mx.nd.transpose>`                Permutes the dimensions of an array
========================================================  =================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.SequenceReverse
   mx.nd.SwapAxis
   mx.nd.depth.to.space
   mx.nd.flip
   mx.nd.reverse
   mx.nd.shuffle
   mx.nd.space.to.depth
   mx.nd.swapaxes
   mx.nd.transpose

Sorting and searching
^^^^^^^^^^^^^^^^^^^^^^^


======================================================  ====================================================================================================
:doc:`mx.nd.argmax <./mx.nd.argmax>`                    Returns indices of the maximum values along an axis
:doc:`mx.nd.argmax.channel <./mx.nd.argmax.channel>`    Returns argmax indices of each channel from the input array
:doc:`mx.nd.argmin <./mx.nd.argmin>`                    Returns indices of the minimum values along an axis
:doc:`mx.nd.argsort <./mx.nd.argsort>`                  Returns the indices that would sort an input array along the given axis
:doc:`mx.nd.sort <./mx.nd.sort>`                        Returns a sorted copy of an input array along the given axis
:doc:`mx.nd.topk <./mx.nd.topk>`                        Returns the indices of the top *k* elements in an input array along the given axis (by default)
:doc:`mx.nd.where <./mx.nd.where>`                      Return the elements, either from x or y, depending on the condition
======================================================  ====================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.argmax
   mx.nd.argmax.channel
   mx.nd.argmin
   mx.nd.argsort
   mx.nd.sort
   mx.nd.topk
   mx.nd.where

Indexing
^^^^^^^^^^^^


====================================================================  =============================================================================================================================================
:doc:`mx.nd.SequenceLast <./mx.nd.SequenceLast>`                      Takes the last element of a sequence
:doc:`mx.nd.SequenceMask <./mx.nd.SequenceMask>`                      Sets all elements outside the sequence to a constant value
:doc:`mx.nd.SliceChannel <./mx.nd.SliceChannel>`                      Splits an array along a particular axis into multiple sub-arrays
:doc:`mx.nd.batch.take <./mx.nd.batch.take>`                          Takes elements from a data batch
:doc:`mx.nd.choose.element.0index <./mx.nd.choose.element.0index>`    Picks elements from an input array according to the input indices along the given axis
:doc:`mx.nd.crop <./mx.nd.crop>`                                      Slices a region of the array
:doc:`mx.nd.diag <./mx.nd.diag>`                                      Extracts a diagonal or constructs a diagonal array
:doc:`mx.nd.fill.element.0index <./mx.nd.fill.element.0index>`        Fill one element of each line(row for python, column for R/Julia) in lhs according to index indicated by rhs and values indicated by mhs
:doc:`mx.nd.gather.nd <./mx.nd.gather.nd>`                            Gather elements or slices from `data` and store to a tensor whose shape is defined by `indices`
:doc:`mx.nd.pick <./mx.nd.pick>`                                      Picks elements from an input array according to the input indices along the given axis
:doc:`mx.nd.ravel.multi.index <./mx.nd.ravel.multi.index>`            Converts a batch of index arrays into an array of flat indices
:doc:`mx.nd.slice.axis <./mx.nd.slice.axis>`                          Slices along a given axis
:doc:`mx.nd.slice.like <./mx.nd.slice.like>`                          Slices a region of the array like the shape of another array
:doc:`mx.nd.take <./mx.nd.take>`                                      Takes elements from an input array along the given axis
:doc:`mx.nd.unravel.index <./mx.nd.unravel.index>`                    Converts an array of flat indices into a batch of index arrays
====================================================================  =============================================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.SequenceLast
   mx.nd.SequenceMask
   mx.nd.SliceChannel
   mx.nd.batch.take
   mx.nd.choose.element.0index
   mx.nd.crop
   mx.nd.diag
   mx.nd.fill.element.0index
   mx.nd.gather.nd
   mx.nd.pick
   mx.nd.ravel.multi.index
   mx.nd.slice.axis
   mx.nd.slice.like
   mx.nd.take
   mx.nd.unravel.index

Mathematical operations on arrays 
-----------------------------------



Arithmetic
^^^^^^^^^^^^^


==========================================================  ==============================================================================================================================
:doc:`mx.nd.ElementWiseSum <./mx.nd.ElementWiseSum>`        Adds all input arguments element-wise
:doc:`mx.nd.GroupNorm <./mx.nd.GroupNorm>`                  Group normalization
:doc:`mx.nd.abs <./mx.nd.abs>`                              Returns element-wise absolute value of the input
:doc:`mx.nd.add.n <./mx.nd.add.n>`                          Adds all input arguments element-wise
:doc:`mx.nd.all.finite <./mx.nd.all.finite>`                Check if all the float numbers in the array are finite (used for AMP)
:doc:`mx.nd.cbrt <./mx.nd.cbrt>`                            Returns element-wise cube-root value of the input
:doc:`mx.nd.cumsum <./mx.nd.cumsum>`                        Return the cumulative sum of the elements along a given axis
:doc:`mx.nd.elemwise.add <./mx.nd.elemwise.add>`            Adds arguments element-wise
:doc:`mx.nd.elemwise.div <./mx.nd.elemwise.div>`            Divides arguments element-wise
:doc:`mx.nd.elemwise.mul <./mx.nd.elemwise.mul>`            Multiplies arguments element-wise
:doc:`mx.nd.elemwise.sub <./mx.nd.elemwise.sub>`            Subtracts arguments element-wise
:doc:`mx.nd.erf <./mx.nd.erf>`                              Returns element-wise gauss error function of the input
:doc:`mx.nd.erfinv <./mx.nd.erfinv>`                        Returns element-wise inverse gauss error function of the input
:doc:`mx.nd.exp <./mx.nd.exp>`                              Returns element-wise exponential value of the input
:doc:`mx.nd.expm1 <./mx.nd.expm1>`                          Returns ``exp(x) - 1`` computed element-wise on the input
:doc:`mx.nd.gamma <./mx.nd.gamma>`                          Returns the gamma function (extension of the factorial function \ to the reals), computed element-wise on the input array
:doc:`mx.nd.gammaln <./mx.nd.gammaln>`                      Returns element-wise log of the absolute value of the gamma function \ of the input
:doc:`mx.nd.identity <./mx.nd.identity>`                    Returns a copy of the input
:doc:`mx.nd.log <./mx.nd.log>`                              Returns element-wise Natural logarithmic value of the input
:doc:`mx.nd.log10 <./mx.nd.log10>`                          Returns element-wise Base-10 logarithmic value of the input
:doc:`mx.nd.log1p <./mx.nd.log1p>`                          Returns element-wise ``log(1 + x)`` value of the input
:doc:`mx.nd.log2 <./mx.nd.log2>`                            Returns element-wise Base-2 logarithmic value of the input
:doc:`mx.nd.logical.not <./mx.nd.logical.not>`              Returns the result of logical NOT (!) function
:doc:`mx.nd.moments <./mx.nd.moments>`                      Calculate the mean and variance of `data`
:doc:`mx.nd.multi.all.finite <./mx.nd.multi.all.finite>`    Check if all the float numbers in all the arrays are finite (used for AMP)
:doc:`mx.nd.multi.lars <./mx.nd.multi.lars>`                Compute the LARS coefficients of multiple weights and grads from their sums of square"
:doc:`mx.nd.multi.sum.sq <./mx.nd.multi.sum.sq>`            Compute the sums of squares of multiple arrays
:doc:`mx.nd.negative <./mx.nd.negative>`                    Numerical negative of the argument, element-wise
:doc:`mx.nd.rcbrt <./mx.nd.rcbrt>`                          Returns element-wise inverse cube-root value of the input
:doc:`mx.nd.reciprocal <./mx.nd.reciprocal>`                Returns the reciprocal of the argument, element-wise
:doc:`mx.nd.reset.arrays <./mx.nd.reset.arrays>`            Set to zero multiple arrays
:doc:`mx.nd.rsqrt <./mx.nd.rsqrt>`                          Returns element-wise inverse square-root value of the input
:doc:`mx.nd.sign <./mx.nd.sign>`                            Returns element-wise sign of the input
:doc:`mx.nd.sqrt <./mx.nd.sqrt>`                            Returns element-wise square-root value of the input
:doc:`mx.nd.square <./mx.nd.square>`                        Returns element-wise squared value of the input
==========================================================  ==============================================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.ElementWiseSum
   mx.nd.GroupNorm
   mx.nd.abs
   mx.nd.add.n
   mx.nd.all.finite
   mx.nd.cbrt
   mx.nd.cumsum
   mx.nd.elemwise.add
   mx.nd.elemwise.div
   mx.nd.elemwise.mul
   mx.nd.elemwise.sub
   mx.nd.erf
   mx.nd.erfinv
   mx.nd.exp
   mx.nd.expm1
   mx.nd.gamma
   mx.nd.gammaln
   mx.nd.identity
   mx.nd.log
   mx.nd.log10
   mx.nd.log1p
   mx.nd.log2
   mx.nd.logical.not
   mx.nd.moments
   mx.nd.multi.all.finite
   mx.nd.multi.lars
   mx.nd.multi.sum.sq
   mx.nd.negative
   mx.nd.rcbrt
   mx.nd.reciprocal
   mx.nd.reset.arrays
   mx.nd.rsqrt
   mx.nd.sign
   mx.nd.sqrt
   mx.nd.square

Reduce
^^^^^^^^^^^^^


==========================================  ===================================================================================================
:doc:`mx.nd.max <./mx.nd.max>`              Computes the max of array elements over given axes
:doc:`mx.nd.max.axis <./mx.nd.max.axis>`    Computes the max of array elements over given axes
:doc:`mx.nd.mean <./mx.nd.mean>`            Computes the mean of array elements over given axes
:doc:`mx.nd.min <./mx.nd.min>`              Computes the min of array elements over given axes
:doc:`mx.nd.min.axis <./mx.nd.min.axis>`    Computes the min of array elements over given axes
:doc:`mx.nd.nanprod <./mx.nd.nanprod>`      Computes the product of array elements over given axes treating Not a Numbers (``NaN``) as one
:doc:`mx.nd.nansum <./mx.nd.nansum>`        Computes the sum of array elements over given axes treating Not a Numbers (``NaN``) as zero
:doc:`mx.nd.prod <./mx.nd.prod>`            Computes the product of array elements over given axes
:doc:`mx.nd.sum <./mx.nd.sum>`              Computes the sum of array elements over given axes
:doc:`mx.nd.sum.axis <./mx.nd.sum.axis>`    Computes the sum of array elements over given axes
==========================================  ===================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.max
   mx.nd.max.axis
   mx.nd.mean
   mx.nd.min
   mx.nd.min.axis
   mx.nd.nanprod
   mx.nd.nansum
   mx.nd.prod
   mx.nd.sum
   mx.nd.sum.axis

Round
^^^^^^^^^^^^^


====================================  ==========================================================================================
:doc:`mx.nd.ceil <./mx.nd.ceil>`      Returns element-wise ceiling of the input
:doc:`mx.nd.clip <./mx.nd.clip>`      Clips (limits) the values in an array
:doc:`mx.nd.fix <./mx.nd.fix>`        Returns element-wise rounded value to the nearest \ integer towards zero of the input
:doc:`mx.nd.floor <./mx.nd.floor>`    Returns element-wise floor of the input
:doc:`mx.nd.rint <./mx.nd.rint>`      Returns element-wise rounded value to the nearest integer of the input
:doc:`mx.nd.round <./mx.nd.round>`    Returns element-wise rounded value to the nearest integer of the input
:doc:`mx.nd.trunc <./mx.nd.trunc>`    Return the element-wise truncated value of the input
====================================  ==========================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.ceil
   mx.nd.clip
   mx.nd.fix
   mx.nd.floor
   mx.nd.rint
   mx.nd.round
   mx.nd.trunc

Linear algebra
^^^^^^^^^^^^^^^^


================================================================  ============================================================================================
:doc:`mx.nd.L2Normalization <./mx.nd.L2Normalization>`            Normalize the input array using the L2 norm
:doc:`mx.nd.batch.dot <./mx.nd.batch.dot>`                        Batchwise dot product
:doc:`mx.nd.dot <./mx.nd.dot>`                                    Dot product of two arrays
:doc:`mx.nd.khatri.rao <./mx.nd.khatri.rao>`                      Computes the Khatri-Rao product of the input matrices
:doc:`mx.nd.linalg.det <./mx.nd.linalg.det>`                      Compute the determinant of a matrix
:doc:`mx.nd.linalg.extractdiag <./mx.nd.linalg.extractdiag>`      Extracts the diagonal entries of a square matrix
:doc:`mx.nd.linalg.extracttrian <./mx.nd.linalg.extracttrian>`    Extracts a triangular sub-matrix from a square matrix
:doc:`mx.nd.linalg.gelqf <./mx.nd.linalg.gelqf>`                  LQ factorization for general matrix
:doc:`mx.nd.linalg.gemm <./mx.nd.linalg.gemm>`                    Performs general matrix multiplication and accumulation
:doc:`mx.nd.linalg.gemm2 <./mx.nd.linalg.gemm2>`                  Performs general matrix multiplication
:doc:`mx.nd.linalg.inverse <./mx.nd.linalg.inverse>`              Compute the inverse of a matrix
:doc:`mx.nd.linalg.makediag <./mx.nd.linalg.makediag>`            Constructs a square matrix with the input as diagonal
:doc:`mx.nd.linalg.maketrian <./mx.nd.linalg.maketrian>`          Constructs a square matrix with the input representing a specific triangular sub-matrix
:doc:`mx.nd.linalg.potrf <./mx.nd.linalg.potrf>`                  Performs Cholesky factorization of a symmetric positive-definite matrix
:doc:`mx.nd.linalg.potri <./mx.nd.linalg.potri>`                  Performs matrix inversion from a Cholesky factorization
:doc:`mx.nd.linalg.slogdet <./mx.nd.linalg.slogdet>`              Compute the sign and log of the determinant of a matrix
:doc:`mx.nd.linalg.sumlogdiag <./mx.nd.linalg.sumlogdiag>`        Computes the sum of the logarithms of the diagonal elements of a square matrix
:doc:`mx.nd.linalg.syrk <./mx.nd.linalg.syrk>`                    Multiplication of matrix with its transpose
:doc:`mx.nd.linalg.trmm <./mx.nd.linalg.trmm>`                    Performs multiplication with a lower triangular matrix
:doc:`mx.nd.linalg.trsm <./mx.nd.linalg.trsm>`                    Solves matrix equation involving a lower triangular matrix
:doc:`mx.nd.norm <./mx.nd.norm>`                                  Computes the norm on an NDArray
:doc:`mx.nd.smooth.l1 <./mx.nd.smooth.l1>`                        Calculate Smooth L1 Loss(lhs, scalar) by summing
================================================================  ============================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.L2Normalization
   mx.nd.batch.dot
   mx.nd.dot
   mx.nd.khatri.rao
   mx.nd.linalg.det
   mx.nd.linalg.extractdiag
   mx.nd.linalg.extracttrian
   mx.nd.linalg.gelqf
   mx.nd.linalg.gemm
   mx.nd.linalg.gemm2
   mx.nd.linalg.inverse
   mx.nd.linalg.makediag
   mx.nd.linalg.maketrian
   mx.nd.linalg.potrf
   mx.nd.linalg.potri
   mx.nd.linalg.slogdet
   mx.nd.linalg.sumlogdiag
   mx.nd.linalg.syrk
   mx.nd.linalg.trmm
   mx.nd.linalg.trsm
   mx.nd.norm
   mx.nd.smooth.l1

Trigonometric functions
^^^^^^^^^^^^^^^^^^^^^^^^^


========================================  =====================================================================
:doc:`mx.nd.arccos <./mx.nd.arccos>`      Returns element-wise inverse cosine of the input array
:doc:`mx.nd.arcsin <./mx.nd.arcsin>`      Returns element-wise inverse sine of the input array
:doc:`mx.nd.arctan <./mx.nd.arctan>`      Returns element-wise inverse tangent of the input array
:doc:`mx.nd.cos <./mx.nd.cos>`            Computes the element-wise cosine of the input array
:doc:`mx.nd.degrees <./mx.nd.degrees>`    Converts each element of the input array from radians to degrees
:doc:`mx.nd.radians <./mx.nd.radians>`    Converts each element of the input array from degrees to radians
:doc:`mx.nd.sin <./mx.nd.sin>`            Computes the element-wise sine of the input array
:doc:`mx.nd.tan <./mx.nd.tan>`            Computes the element-wise tangent of the input array
========================================  =====================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.arccos
   mx.nd.arcsin
   mx.nd.arctan
   mx.nd.cos
   mx.nd.degrees
   mx.nd.radians
   mx.nd.sin
   mx.nd.tan

Hyperbolic functions
^^^^^^^^^^^^^^^^^^^^^^^^^


========================================  ====================================================================================================
:doc:`mx.nd.arccosh <./mx.nd.arccosh>`    Returns the element-wise inverse hyperbolic cosine of the input array, \ computed element-wise
:doc:`mx.nd.arcsinh <./mx.nd.arcsinh>`    Returns the element-wise inverse hyperbolic sine of the input array, \ computed element-wise
:doc:`mx.nd.arctanh <./mx.nd.arctanh>`    Returns the element-wise inverse hyperbolic tangent of the input array, \ computed element-wise
:doc:`mx.nd.cosh <./mx.nd.cosh>`          Returns the hyperbolic cosine  of the input array, computed element-wise
:doc:`mx.nd.sinh <./mx.nd.sinh>`          Returns the hyperbolic sine of the input array, computed element-wise
:doc:`mx.nd.tanh <./mx.nd.tanh>`          Returns the hyperbolic tangent of the input array, computed element-wise
========================================  ====================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.arccosh
   mx.nd.arcsinh
   mx.nd.arctanh
   mx.nd.cosh
   mx.nd.sinh
   mx.nd.tanh

Neural network array operations
-----------------------------------------------------


============================================================================  ========================================================================================================
:doc:`mx.nd.Activation <./mx.nd.Activation>`                                  Applies an activation function element-wise to the input
:doc:`mx.nd.BatchNorm <./mx.nd.BatchNorm>`                                    Batch normalization
:doc:`mx.nd.BatchNorm.v1 <./mx.nd.BatchNorm.v1>`                              Batch normalization
:doc:`mx.nd.BlockGrad <./mx.nd.BlockGrad>`                                    Stops gradient computation
:doc:`mx.nd.CTCLoss <./mx.nd.CTCLoss>`                                        Connectionist Temporal Classification Loss
:doc:`mx.nd.Convolution <./mx.nd.Convolution>`                                Compute *N*-D convolution on *(N+2)*-D input
:doc:`mx.nd.Convolution.v1 <./mx.nd.Convolution.v1>`                          This operator is DEPRECATED
:doc:`mx.nd.Correlation <./mx.nd.Correlation>`                                Applies correlation to inputs
:doc:`mx.nd.Custom <./mx.nd.Custom>`                                          Apply a custom operator implemented in a frontend language (like Python)
:doc:`mx.nd.Deconvolution <./mx.nd.Deconvolution>`                            Computes 1D or 2D transposed convolution (aka fractionally strided convolution) of the input tensor
:doc:`mx.nd.Dropout <./mx.nd.Dropout>`                                        Applies dropout operation to input array
:doc:`mx.nd.Embedding <./mx.nd.Embedding>`                                    Maps integer indices to vector representations (embeddings)
:doc:`mx.nd.FullyConnected <./mx.nd.FullyConnected>`                          Applies a linear transformation: :math:`Y = XW^T + b`
:doc:`mx.nd.IdentityAttachKLSparseReg <./mx.nd.IdentityAttachKLSparseReg>`    Apply a sparse regularization to the output a sigmoid activation function
:doc:`mx.nd.InstanceNorm <./mx.nd.InstanceNorm>`                              Applies instance normalization to the n-dimensional input array
:doc:`mx.nd.LRN <./mx.nd.LRN>`                                                Applies local response normalization to the input
:doc:`mx.nd.LayerNorm <./mx.nd.LayerNorm>`                                    Layer normalization
:doc:`mx.nd.LeakyReLU <./mx.nd.LeakyReLU>`                                    Applies Leaky rectified linear unit activation element-wise to the input
:doc:`mx.nd.LinearRegressionOutput <./mx.nd.LinearRegressionOutput>`          Computes and optimizes for squared loss during backward propagation
:doc:`mx.nd.LogisticRegressionOutput <./mx.nd.LogisticRegressionOutput>`      Applies a logistic function to the input
:doc:`mx.nd.MAERegressionOutput <./mx.nd.MAERegressionOutput>`                Computes mean absolute error of the input
:doc:`mx.nd.MakeLoss <./mx.nd.MakeLoss>`                                      Make your own loss function in network construction
:doc:`mx.nd.Pooling <./mx.nd.Pooling>`                                        Performs pooling on the input
:doc:`mx.nd.Pooling.v1 <./mx.nd.Pooling.v1>`                                  This operator is DEPRECATED
:doc:`mx.nd.RNN <./mx.nd.RNN>`                                                Applies recurrent layers to input data
:doc:`mx.nd.ROIPooling <./mx.nd.ROIPooling>`                                  Performs region of interest(ROI) pooling on the input array
:doc:`mx.nd.SVMOutput <./mx.nd.SVMOutput>`                                    Computes support vector machine based transformation of the input
:doc:`mx.nd.Softmax <./mx.nd.Softmax>`                                        Computes the gradient of cross entropy loss with respect to softmax output
:doc:`mx.nd.SoftmaxActivation <./mx.nd.SoftmaxActivation>`                    Applies softmax activation to input
:doc:`mx.nd.SoftmaxOutput <./mx.nd.SoftmaxOutput>`                            Computes the gradient of cross entropy loss with respect to softmax output
:doc:`mx.nd.SpatialTransformer <./mx.nd.SpatialTransformer>`                  Applies a spatial transformer to input feature map
:doc:`mx.nd.ctc.loss <./mx.nd.ctc.loss>`                                      Connectionist Temporal Classification Loss
:doc:`mx.nd.hard.sigmoid <./mx.nd.hard.sigmoid>`                              Computes hard sigmoid of x element-wise
:doc:`mx.nd.log.softmax <./mx.nd.log.softmax>`                                Computes the log softmax of the input
:doc:`mx.nd.make.loss <./mx.nd.make.loss>`                                    Make your own loss function in network construction
:doc:`mx.nd.relu <./mx.nd.relu>`                                              Computes rectified linear activation
:doc:`mx.nd.sigmoid <./mx.nd.sigmoid>`                                        Computes sigmoid of x element-wise
:doc:`mx.nd.softmax.cross.entropy <./mx.nd.softmax.cross.entropy>`            Calculate cross entropy of softmax output and one-hot label
:doc:`mx.nd.softmin <./mx.nd.softmin>`                                        Applies the softmin function
:doc:`mx.nd.softsign <./mx.nd.softsign>`                                      Computes softsign of x element-wise
:doc:`mx.nd.stop.gradient <./mx.nd.stop.gradient>`                            Stops gradient computation
============================================================================  ========================================================================================================

.. toctree::
   :titlesonly:
   :hidden:
   
   mx.nd.Activation
   mx.nd.BatchNorm
   mx.nd.BatchNorm.v1
   mx.nd.BlockGrad
   mx.nd.CTCLoss
   mx.nd.Convolution
   mx.nd.Convolution.v1
   mx.nd.Correlation
   mx.nd.Custom
   mx.nd.Deconvolution
   mx.nd.Dropout
   mx.nd.Embedding
   mx.nd.FullyConnected
   mx.nd.IdentityAttachKLSparseReg
   mx.nd.InstanceNorm
   mx.nd.LRN
   mx.nd.LayerNorm
   mx.nd.LeakyReLU
   mx.nd.LinearRegressionOutput
   mx.nd.LogisticRegressionOutput
   mx.nd.MAERegressionOutput
   mx.nd.MakeLoss
   mx.nd.Pooling
   mx.nd.Pooling.v1
   mx.nd.RNN
   mx.nd.ROIPooling
   mx.nd.SVMOutput
   mx.nd.Softmax
   mx.nd.SoftmaxActivation
   mx.nd.SoftmaxOutput
   mx.nd.SpatialTransformer
   mx.nd.ctc.loss
   mx.nd.hard.sigmoid
   mx.nd.log.softmax
   mx.nd.make.loss
   mx.nd.relu
   mx.nd.sigmoid
   mx.nd.softmax.cross.entropy
   mx.nd.softmin
   mx.nd.softsign
   mx.nd.stop.gradient

